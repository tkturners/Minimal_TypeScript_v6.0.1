import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';

import { Iconify } from 'src/components/iconify';
import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { ComponentHero } from '../../component-hero';
import { ComponentBlock } from '../../component-block';
import { ScrollToViewTemplate } from '../../component-template';

// ----------------------------------------------------------------------

const COLORS = ['default', 'primary', 'secondary', 'info', 'success', 'warning', 'error'] as const;

const STATUS = ['alway', 'online', 'busy', 'offline'] as const;

// ----------------------------------------------------------------------

export function BadgeView() {
  const DEMO = [
    {
      name: 'Basic',
      component: (
        <ComponentBlock sx={{ gap: 4 }}>
          {COLORS.map((color) => (
            <Badge key={color} badgeContent={4} color={color}>
              <Iconify icon="fluent:mail-24-filled" width={24} />
            </Badge>
          ))}
        </ComponentBlock>
      ),
    },
    {
      name: 'Maximum value',
      component: (
        <ComponentBlock sx={{ gap: 4 }}>
          <Badge
            badgeContent={99}
            color="error"
            children={<Iconify icon="fluent:mail-24-filled" width={24} />}
          />
          <Badge
            badgeContent={100}
            color="error"
            children={<Iconify icon="fluent:mail-24-filled" width={24} />}
          />
          <Badge
            badgeContent={1000}
            max={999}
            color="error"
            children={<Iconify icon="fluent:mail-24-filled" width={24} />}
          />
        </ComponentBlock>
      ),
    },
    {
      name: 'Dot badge',
      component: (
        <ComponentBlock sx={{ gap: 4 }}>
          <Badge color="info" variant="dot">
            <Iconify icon="fluent:mail-24-filled" width={24} />
          </Badge>
          <Badge color="info" variant="dot">
            <Typography>Typography</Typography>
          </Badge>
        </ComponentBlock>
      ),
    },
    {
      name: 'Badge overlap',
      component: (
        <ComponentBlock sx={{ gap: 4 }}>
          <Badge color="info" badgeContent=" ">
            <Box sx={{ width: 40, height: 40, bgcolor: 'warning.main' }} />
          </Badge>
          <Badge color="info" badgeContent=" " variant="dot">
            <Box sx={{ width: 40, height: 40, bgcolor: 'warning.main' }} />
          </Badge>
          <Badge color="info" overlap="circular" badgeContent=" ">
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                bgcolor: 'warning.main',
              }}
            />
          </Badge>
          <Badge color="info" overlap="circular" badgeContent=" " variant="dot">
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                bgcolor: 'warning.main',
              }}
            />
          </Badge>
        </ComponentBlock>
      ),
    },
    {
      name: 'Status',
      component: (
        <ComponentBlock sx={{ gap: 4 }}>
          {STATUS.map((status) => (
            <Badge
              key={status}
              variant={status}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  bgcolor: 'grey.400',
                }}
              />
            </Badge>
          ))}
        </ComponentBlock>
      ),
    },
  ];

  return (
    <>
      <ComponentHero>
        <CustomBreadcrumbs
          heading="Badge"
          links={[{ name: 'Components', href: paths.components }, { name: 'Badge' }]}
          moreLink={['https://mui.com/components/badges']}
        />
      </ComponentHero>

      <ScrollToViewTemplate data={DEMO} />
    </>
  );
}
