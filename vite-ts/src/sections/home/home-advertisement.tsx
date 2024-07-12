import type { StackProps } from '@mui/material/Stack';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';

import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config-global';
import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { SvgColor } from 'src/components/svg-color';
import { varFade, MotionViewport } from 'src/components/animate';

import { FloatLine, FloatPlusIcon } from './components/svg-elements';

// ----------------------------------------------------------------------

export function HomeAdvertisement({ sx, ...other }: StackProps) {
  const theme = useTheme();

  const renderLines = (
    <>
      <FloatPlusIcon sx={{ left: 72, top: '50%', mt: -1 }} />
      <FloatLine vertical sx={{ top: 0, left: 80, height: 'calc(50% + 64px)' }} />
      <FloatLine sx={{ top: '50%', left: 0 }} />
    </>
  );

  const renderDescription = (
    <Stack spacing={5} sx={{ zIndex: 9 }}>
      <Box
        component={m.h2}
        variants={varFade({ distance: 24 }).inDown}
        sx={{ m: 0, color: 'common.white', typography: { xs: 'h2', md: 'h1' } }}
      >
        Get started with
        <br /> Minimal kit
        <Box
          component="span"
          sx={{
            ...textGradient(
              `to right, ${theme.vars.palette.common.white}, ${varAlpha(theme.vars.palette.common.whiteChannel, 0.4)}`
            ),
            ml: 1,
          }}
        >
          today
        </Box>
      </Box>

      <Stack
        spacing={2}
        direction="row"
        flexWrap="wrap"
        justifyContent={{ xs: 'center', md: 'flex-start' }}
      >
        <m.div variants={varFade({ distance: 24 }).inRight}>
          <Button
            color="primary"
            size="large"
            variant="contained"
            target="_blank"
            rel="noopener"
            href={paths.minimalStore}
          >
            Purchase now
          </Button>
        </m.div>

        <m.div variants={varFade({ distance: 24 }).inRight}>
          <Button
            color="inherit"
            size="large"
            variant="outlined"
            target="_blank"
            rel="noopener"
            href={paths.freeUI}
            endIcon={<Iconify width={16} icon="eva:external-link-fill" sx={{ mr: 0.5 }} />}
            sx={{
              color: 'common.white',
              borderColor: 'common.white',
              '&:hover': { borderColor: 'currentColor' },
            }}
          >
            Get free version
          </Button>
        </m.div>
      </Stack>
    </Stack>
  );

  const renderImg = (
    <m.div variants={varFade().inUp}>
      <Box
        component={m.img}
        animate={{ y: [-20, 0, -20] }}
        transition={{ duration: 4, repeat: Infinity }}
        alt="rocket"
        src={`${CONFIG.site.basePath}/assets/illustrations/illustration-rocket-large.webp`}
        sx={{ zIndex: 9, width: 360, aspectRatio: '1/1' }}
      />
    </m.div>
  );

  const renderGridBg = (
    <m.div variants={varFade().in}>
      <SvgColor
        src={`${CONFIG.site.basePath}/assets/background/shape-grid.svg`}
        sx={{
          top: 0,
          left: 0,
          width: 1,
          height: 1,
          zIndex: 8,
          opacity: 0.08,
          color: 'grey.500',
          position: 'absolute',
          maskSize: 'auto 100%',
        }}
      />
    </m.div>
  );

  const renderBlur = (
    <Box
      sx={{
        top: 0,
        right: 0,
        zIndex: 7,
        width: 240,
        height: 240,
        bgcolor: 'grey.500',
        position: 'absolute',
        filter: 'blur(200px)',
      }}
    />
  );

  return (
    <Stack component="section" sx={{ position: 'relative', ...sx }} {...other}>
      <MotionViewport>
        {renderLines}

        <Container sx={{ position: 'relative', zIndex: 9 }}>
          <Stack
            spacing={5}
            alignItems="center"
            direction={{ xs: 'column', md: 'row' }}
            sx={{
              py: 8,
              px: 5,
              borderRadius: 3,
              overflow: 'hidden',
              bgcolor: 'grey.900',
              position: 'relative',
              textAlign: { xs: 'center', md: 'left' },
              border: `solid 1px ${theme.vars.palette.grey[800]}`,
            }}
          >
            {renderImg}

            {renderDescription}

            {renderGridBg}

            {renderBlur}
          </Stack>
        </Container>
      </MotionViewport>
    </Stack>
  );
}
