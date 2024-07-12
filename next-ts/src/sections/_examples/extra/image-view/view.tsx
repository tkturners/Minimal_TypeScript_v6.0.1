'use client';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';

import { _mock } from 'src/_mock';

import { Image } from 'src/components/image';
import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { ComponentHero } from '../../component-hero';
import { ScrollToViewTemplate } from '../../component-template';

// ----------------------------------------------------------------------

const RATIO = ['4/3', '3/4', '6/4', '4/6', '16/9', '9/16', '21/9', '9/21', '1/1'] as const;

const IMAGES = RATIO.map((ratio, index) => ({ ratio, url: _mock.image.cover(index + 1) }));

// ----------------------------------------------------------------------

export function ImageView() {
  const DEMO = [
    {
      name: 'List',
      component: (
        <Box
          gap={2}
          display="grid"
          gridTemplateColumns={{ xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)' }}
        >
          {IMAGES.map((img) => (
            <Image
              key={img.ratio}
              alt={img.ratio}
              src={img.url}
              ratio="3/2"
              sx={{ borderRadius: 2 }}
            />
          ))}
        </Box>
      ),
    },
    {
      name: 'Aspect ratio',
      component: (
        <Box
          gap={2}
          display="grid"
          gridTemplateColumns={{ xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)' }}
        >
          {IMAGES.map((img) => (
            <Stack key={img.ratio} spacing={1}>
              <Typography variant="overline" sx={{ color: 'text.secondary' }}>
                {img.ratio}
              </Typography>

              <Image alt={img.ratio} src={img.url} ratio={img.ratio} sx={{ borderRadius: 2 }} />
            </Stack>
          ))}
        </Box>
      ),
    },
  ];

  return (
    <>
      <ComponentHero>
        <CustomBreadcrumbs
          heading="Image"
          links={[{ name: 'Components', href: paths.components }, { name: 'Image' }]}
        />
      </ComponentHero>

      <ScrollToViewTemplate data={DEMO} />
    </>
  );
}
