import type { BoxProps } from '@mui/material/Box';
import type { IDateValue } from 'src/types/common';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';

import { fDate } from 'src/utils/format-time';

import { _testimonials } from 'src/_mock';
import { CONFIG } from 'src/config-global';
import { bgBlur, varAlpha, bgGradient, hideScrollY } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

export function AboutTestimonials({ sx, ...other }: BoxProps) {
  const theme = useTheme();

  const renderLink = (
    <Button color="primary" endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}>
      Read more
    </Button>
  );

  const renderDescription = (
    <Box
      sx={{
        maxWidth: { md: 360 },
        textAlign: { xs: 'center', md: 'unset' },
      }}
    >
      <m.div variants={varFade().inUp}>
        <Typography variant="overline" sx={{ color: 'common.white', opacity: 0.48 }}>
          Testimonials
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <Typography variant="h2" sx={{ my: 3, color: 'common.white' }}>
          Who love <br />
          my work
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <Typography sx={{ color: 'common.white' }}>
          Our goal is to create a product and service that you’re satisfied with and use it every
          day. This is why we’re constantly working on our services to make it better every day and
          really listen to what our users has to say.
        </Typography>
      </m.div>

      <Box
        component={m.div}
        variants={varFade().inUp}
        sx={{
          mt: 3,
          justifyContent: 'center',
          display: { xs: 'flex', md: 'none' },
        }}
      >
        {renderLink}
      </Box>
    </Box>
  );

  const renderContent = (
    <Box
      sx={{
        ...hideScrollY,
        py: { md: 10 },
        height: { md: 1 },
        overflowY: { xs: 'unset', md: 'auto' },
      }}
    >
      <Masonry spacing={3} columns={{ xs: 1, md: 2 }} sx={{ ml: 0 }}>
        {_testimonials.map((testimonial) => (
          <m.div key={testimonial.name} variants={varFade().inUp}>
            <TestimonialItem testimonial={testimonial} />
          </m.div>
        ))}
      </Masonry>
    </Box>
  );

  return (
    <Box
      component="section"
      sx={{
        ...bgGradient({
          color: `0deg, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.9)}, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.9)}`,
          imgUrl: `${CONFIG.assetsDir}/assets/images/about/testimonials.webp`,
        }),
        overflow: 'hidden',
        height: { md: 840 },
        py: { xs: 10, md: 0 },
        ...sx,
      }}
      {...other}
    >
      <Container component={MotionViewport} sx={{ position: 'relative', height: 1 }}>
        <Grid
          container
          spacing={3}
          alignItems="center"
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{ height: 1 }}
        >
          <Grid xs={10} md={4}>
            {renderDescription}
          </Grid>

          <Grid xs={12} md={7} lg={6} alignItems="center" sx={{ height: 1 }}>
            {renderContent}
          </Grid>
        </Grid>

        <Box
          component={m.div}
          variants={varFade().inUp}
          sx={{
            bottom: 60,
            position: 'absolute',
            display: { xs: 'none', md: 'flex' },
          }}
        >
          {renderLink}
        </Box>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

type TestimonialItemProps = BoxProps & {
  testimonial: {
    name: string;
    content: string;
    avatarUrl: string;
    ratingNumber: number;
    postedDate: IDateValue;
  };
};

function TestimonialItem({ testimonial, sx, ...other }: TestimonialItemProps) {
  const theme = useTheme();

  return (
    <Box
      gap={3}
      display="flex"
      flexDirection="column"
      sx={{
        ...bgBlur({ color: varAlpha(theme.vars.palette.common.whiteChannel, 0.08) }),
        p: 3,
        borderRadius: 2,
        color: 'common.white',
        ...sx,
      }}
      {...other}
    >
      <Iconify icon="mingcute:quote-left-fill" width={40} sx={{ opacity: 0.48 }} />

      <Typography variant="body2">{testimonial.content}</Typography>

      <Rating value={testimonial.ratingNumber} readOnly size="small" />

      <Box gap={2} display="flex">
        <Avatar alt={testimonial.name} src={testimonial.avatarUrl} />

        <ListItemText
          primary={testimonial.name}
          secondary={fDate(testimonial.postedDate)}
          primaryTypographyProps={{ typography: 'subtitle2', mb: 0.5 }}
          secondaryTypographyProps={{
            color: 'inherit',
            typography: 'caption',
            sx: { opacity: 0.64 },
          }}
        />
      </Box>
    </Box>
  );
}
