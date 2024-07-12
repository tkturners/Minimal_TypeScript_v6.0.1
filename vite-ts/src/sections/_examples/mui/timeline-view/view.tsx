import Paper from '@mui/material/Paper';
import Timeline from '@mui/lab/Timeline';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import Typography from '@mui/material/Typography';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

import { paths } from 'src/routes/paths';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { ComponentHero } from '../../component-hero';
import { ComponentBlock } from '../../component-block';
import { ScrollToViewTemplate } from '../../component-template';

// ----------------------------------------------------------------------

type TimelineType = {
  key: number;
  title: string;
  des: string;
  time: string;
  color?: 'primary' | 'info' | 'success' | 'warning' | 'error' | 'inherit' | 'grey' | 'secondary';
  icon: React.ReactElement;
};

const TIMELINES: TimelineType[] = [
  {
    key: 1,
    title: 'Default',
    des: 'Morbi mattis ullamcorper',
    time: '09:30 am',
    icon: <Iconify icon="eva:folder-add-fill" width={24} />,
  },
  {
    key: 2,
    title: 'Primary',
    des: 'Morbi mattis ullamcorper',
    time: '10:00 am',
    color: 'primary',
    icon: <Iconify icon="eva:image-2-fill" width={24} />,
  },
  {
    key: 3,
    title: 'Secondary',
    des: 'Morbi mattis ullamcorper',
    time: '10:00 am',
    color: 'secondary',
    icon: <Iconify icon="eva:pantone-fill" width={24} />,
  },
  {
    key: 4,
    title: 'Info',
    des: 'Morbi mattis ullamcorper',
    time: '10:30 am',
    color: 'info',
    icon: <Iconify icon="eva:tv-fill" width={24} />,
  },
  {
    key: 5,
    title: 'Success',
    des: 'Morbi mattis ullamcorper',
    time: '11:00 am',
    color: 'success',
    icon: <Iconify icon="eva:activity-fill" width={24} />,
  },
  {
    key: 6,
    title: 'Warning',
    des: 'Morbi mattis ullamcorper',
    time: '11:30 am',
    color: 'warning',
    icon: <Iconify icon="eva:cube-fill" width={24} />,
  },
  {
    key: 7,
    title: 'Error',
    des: 'Morbi mattis ullamcorper',
    time: '12:00 am',
    color: 'error',
    icon: <Iconify icon="eva:film-fill" width={24} />,
  },
];

// ----------------------------------------------------------------------

export function TimelineView() {
  const lastItem = TIMELINES[TIMELINES.length - 1].key;

  const reduceTimeLine = TIMELINES.slice(TIMELINES.length - 3);

  const DEMO = [
    {
      name: 'Left',
      component: (
        <ComponentBlock>
          <Timeline position="left">
            {reduceTimeLine.map((item) => (
              <TimelineItem key={item.key}>
                <TimelineSeparator>
                  <TimelineDot />
                  {lastItem === item.key ? null : <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>{item.title}</TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </ComponentBlock>
      ),
    },
    {
      name: 'Right',
      component: (
        <ComponentBlock>
          <Timeline position="right">
            {reduceTimeLine.map((item) => (
              <TimelineItem key={item.key}>
                <TimelineSeparator>
                  <TimelineDot />
                  {lastItem === item.key ? null : <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>{item.title}</TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </ComponentBlock>
      ),
    },
    {
      name: 'Alternating',
      component: (
        <ComponentBlock>
          <Timeline position="alternate">
            {reduceTimeLine.map((item) => (
              <TimelineItem key={item.key}>
                <TimelineSeparator>
                  <TimelineDot />
                  {lastItem === item.key ? null : <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>{item.title}</TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </ComponentBlock>
      ),
    },
    {
      name: 'Filled',
      component: (
        <ComponentBlock>
          <Timeline position="alternate">
            {TIMELINES.map((item) => (
              <TimelineItem key={item.key}>
                <TimelineSeparator>
                  <TimelineDot color={item.color} />
                  {lastItem === item.key ? null : <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>{item.title}</TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </ComponentBlock>
      ),
    },
    {
      name: 'Outlined',
      component: (
        <ComponentBlock>
          <Timeline position="alternate">
            {TIMELINES.map((item) => (
              <TimelineItem key={item.key}>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color={item.color} />
                  {lastItem === item.key ? null : <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>{item.title}</TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </ComponentBlock>
      ),
    },
    {
      name: 'Opposite content',
      component: (
        <ComponentBlock>
          <Timeline position="alternate">
            {TIMELINES.map((item) => (
              <TimelineItem key={item.key}>
                <TimelineOppositeContent>
                  <Typography sx={{ color: 'text.secondary' }}>{item.time}</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color={item.color} />
                  {lastItem === item.key ? null : <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <Typography> {item.title}</Typography>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </ComponentBlock>
      ),
    },
    {
      name: 'Customized',
      component: (
        <ComponentBlock>
          <Timeline position="alternate">
            {TIMELINES.map((item) => (
              <TimelineItem key={item.key}>
                <TimelineOppositeContent>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {item.time}
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color={item.color}>{item.icon}</TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper
                    sx={{
                      p: 3,
                      bgcolor: (theme) => varAlpha(theme.vars.palette.grey['500Channel'], 0.12),
                    }}
                  >
                    <Typography variant="subtitle2">{item.title}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {item.des}
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </ComponentBlock>
      ),
    },
  ];

  return (
    <>
      <ComponentHero>
        <CustomBreadcrumbs
          heading="Timeline"
          links={[{ name: 'Components', href: paths.components }, { name: 'Timeline' }]}
          moreLink={['https://mui.com/components/timeline']}
        />
      </ComponentHero>

      <ScrollToViewTemplate data={DEMO} />
    </>
  );
}
