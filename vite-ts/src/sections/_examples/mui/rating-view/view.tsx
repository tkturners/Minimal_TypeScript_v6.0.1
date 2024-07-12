import type { IconContainerProps } from '@mui/material/Rating';

import { useState } from 'react';

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

import { paths } from 'src/routes/paths';

import { Iconify } from 'src/components/iconify';
import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { ComponentHero } from '../../component-hero';
import { ComponentBlock } from '../../component-block';
import { ScrollToViewTemplate } from '../../component-template';

// ----------------------------------------------------------------------

const labels: {
  [index: string]: string;
} = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

const customIcons: {
  [index: string]: {
    icon: React.ReactElement;
    label: string;
  };
} = {
  1: { icon: <Iconify icon="ic:round-sentiment-very-dissatisfied" />, label: 'Very Dissatisfied' },
  2: { icon: <Iconify icon="ic:round-sentiment-dissatisfied" />, label: 'Dissatisfied' },
  3: { icon: <Iconify icon="ic:round-sentiment-neutral" />, label: 'Neutral' },
  4: { icon: <Iconify icon="ic:round-sentiment-satisfied" />, label: 'Satisfied' },
  5: { icon: <Iconify icon="ic:round-sentiment-very-satisfied" />, label: 'Very Satisfied' },
};

// ----------------------------------------------------------------------

export function RatingView() {
  const [value, setValue] = useState<number | null>(2);

  const [hover, setHover] = useState(-1);

  const DEMO = [
    {
      name: 'Controlled',
      component: (
        <ComponentBlock>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </ComponentBlock>
      ),
    },
    {
      name: 'Read only',
      component: (
        <ComponentBlock>
          <Rating name="read-only" value={value} readOnly />
        </ComponentBlock>
      ),
    },
    {
      name: 'Disabled',
      component: (
        <ComponentBlock>
          <Rating name="disabled" value={value} disabled />
        </ComponentBlock>
      ),
    },
    {
      name: 'Pristine',
      component: (
        <ComponentBlock>
          <Rating name="pristine" value={null} />
        </ComponentBlock>
      ),
    },
    {
      name: 'Custom empty icon',
      component: (
        <ComponentBlock>
          <Rating name="customized-empty" defaultValue={2} precision={0.5} />
        </ComponentBlock>
      ),
    },
    {
      name: 'Custom icon and color',
      component: (
        <ComponentBlock>
          <Rating
            name="customized-color"
            defaultValue={2}
            getLabelText={(ratingValue) => `${ratingValue} Heart${ratingValue !== 1 ? 's' : ''}`}
            precision={0.5}
            icon={<Iconify icon="solar:heart-bold" />}
            emptyIcon={<Iconify icon="solar:heart-bold" />}
            sx={{ color: 'info.main', '&:hover': { color: 'info.dark' } }}
          />
        </ComponentBlock>
      ),
    },
    {
      name: '10 stars',
      component: (
        <ComponentBlock>
          <Rating name="customized-10" defaultValue={2} max={10} />
        </ComponentBlock>
      ),
    },
    {
      name: 'Custom icon set',
      component: (
        <ComponentBlock>
          <Rating
            name="customized-icons"
            defaultValue={2}
            getLabelText={(ratingValue) => customIcons[ratingValue].label}
            IconContainerComponent={IconContainer}
          />
        </ComponentBlock>
      ),
    },
    {
      name: 'Hover feedback',
      component: (
        <ComponentBlock>
          <Rating
            name="hover-feedback"
            value={value}
            precision={0.5}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            onChangeActive={(event, newHover) => {
              setHover(newHover);
            }}
          />
          {value !== null && <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>}
        </ComponentBlock>
      ),
    },
    {
      name: 'Half ratings',
      component: (
        <ComponentBlock>
          <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
          <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
        </ComponentBlock>
      ),
    },
    {
      name: 'Sizes',
      component: (
        <ComponentBlock>
          <Rating name="size-small" defaultValue={2} size="small" />
          <Rating name="size-medium" defaultValue={2} />
          <Rating name="size-large" defaultValue={2} size="large" />
        </ComponentBlock>
      ),
    },
  ];

  return (
    <>
      <ComponentHero>
        <CustomBreadcrumbs
          heading="Rating"
          links={[{ name: 'Components', href: paths.components }, { name: 'Rating' }]}
          moreLink={['https://mui.com/components/rating']}
        />
      </ComponentHero>

      <ScrollToViewTemplate data={DEMO} />
    </>
  );
}

// ----------------------------------------------------------------------

function IconContainer(props: IconContainerProps) {
  const { value, ...other } = props;

  return <span {...other}>{customIcons[value].icon}</span>;
}
