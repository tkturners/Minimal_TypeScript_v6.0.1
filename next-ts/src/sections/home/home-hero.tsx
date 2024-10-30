import type { MotionValue } from 'framer-motion';
import type { BoxProps } from '@mui/material/Box';

import { useRef, useState } from 'react';
import { m, useScroll, useSpring, useTransform, useMotionValueEvent } from 'framer-motion';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import AvatarGroup from '@mui/material/AvatarGroup';
import Avatar, { avatarClasses } from '@mui/material/Avatar';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { useResponsive } from 'src/hooks/use-responsive';

import { _mock } from 'src/_mock';
import { CONFIG } from 'src/config-global';
import { textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { SvgColor } from 'src/components/svg-color';
import { varFade, MotionContainer } from 'src/components/animate';

import { HeroBackground } from './components/hero-background';

// ----------------------------------------------------------------------

const smKey = 'sm';
const mdKey = 'md';
const lgKey = 'lg';

export function HomeHero({ sx, ...other }: BoxProps) {
  const theme = useTheme();

  const scroll = useScrollPercent();

  const mdUp = useResponsive('up', mdKey);

  const distance = mdUp ? scroll.percent : 0;

  const y1 = useTransformY(scroll.scrollY, distance * -7);
  const y2 = useTransformY(scroll.scrollY, distance * -6);
  const y3 = useTransformY(scroll.scrollY, distance * -5);
  const y4 = useTransformY(scroll.scrollY, distance * -4);
  const y5 = useTransformY(scroll.scrollY, distance * -3);

  const opacity: MotionValue<number> = useTransform(
    scroll.scrollY,
    [0, 1],
    [1, mdUp ? Number((1 - scroll.percent / 100).toFixed(1)) : 1]
  );

  const renderHeading = (
    <AnimatedDiv>
      <Box
        component="h1"
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        sx={{
          ...theme.typography.h2,
          my: 0,
          mx: 'auto',
          maxWidth: 680,
          fontFamily: theme.typography.fontSecondaryFamily,
          [theme.breakpoints.up(lgKey)]: { fontSize: 72, lineHeight: '90px' },
        }}
      >
        <Box component="span" sx={{ width: 1, opacity: 0.24 }}>
          Boost your building
        </Box>
        process with
        <Box
          component={m.span}
          animate={{ backgroundPosition: '200% center' }}
          transition={{
            duration: 20,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          sx={{
            ...textGradient(
              `300deg, ${theme.vars.palette.primary.main} 0%, ${theme.vars.palette.warning.main} 25%, ${theme.vars.palette.primary.main} 50%, ${theme.vars.palette.warning.main} 75%, ${theme.vars.palette.primary.main} 100%`
            ),
            backgroundSize: '400%',
            ml: { xs: 0.75, md: 1, xl: 1.5 },
          }}
        >
          Minimal
        </Box>
      </Box>
    </AnimatedDiv>
  );

  const renderText = (
    <AnimatedDiv>
      <Typography
        variant="body2"
        sx={{
          mx: 'auto',
          [theme.breakpoints.up(smKey)]: { whiteSpace: 'pre' },
          [theme.breakpoints.up(lgKey)]: { fontSize: 20, lineHeight: '36px' },
        }}
      >
        {`The starting point for your next project is based on MUI. \nEasy customization helps you build apps faster and better.`}
      </Typography>
    </AnimatedDiv>
  );

  const renderRatings = (
    <AnimatedDiv>
      <Box
        gap={1.5}
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center"
        sx={{ typography: 'subtitle2' }}
      >
        <AvatarGroup sx={{ [`& .${avatarClasses.root}`]: { width: 32, height: 32 } }}>
          {[...Array(3)].map((_, index) => (
            <Avatar
              key={_mock.fullName(index + 1)}
              alt={_mock.fullName(index + 1)}
              src={_mock.image.avatar(index + 1)}
            />
          ))}
        </AvatarGroup>
        160+ Happy customers
      </Box>
    </AnimatedDiv>
  );

  const renderButtons = (
    <Box display="flex" flexWrap="wrap" justifyContent="center" gap={{ xs: 1.5, sm: 2 }}>
      <AnimatedDiv>
        <Stack alignItems="center" spacing={2.5}>
          <Button
            component={RouterLink}
            href={paths.dashboard.root}
            color="inherit"
            size="large"
            variant="contained"
            startIcon={<Iconify width={24} icon="iconoir:flash" />}
          >
            <span>
              Live preview
              <Box
                component="small"
                sx={{
                  mt: '-3px',
                  opacity: 0.64,
                  display: 'flex',
                  fontSize: theme.typography.pxToRem(10),
                  fontWeight: theme.typography.fontWeightMedium,
                }}
              >
                v{CONFIG.appVersion}
              </Box>
            </span>
          </Button>

          <Link
            color="inherit"
            variant="body2"
            target="_blank"
            rel="noopener"
            href={paths.freeUI}
            underline="always"
            sx={{ gap: 0.5, alignItems: 'center', display: 'inline-flex' }}
          >
            Get free version
            <Iconify width={16} icon="eva:external-link-fill" />
          </Link>
        </Stack>
      </AnimatedDiv>

      <AnimatedDiv>
        <Button
          color="inherit"
          size="large"
          variant="outlined"
          target="_blank"
          rel="noopener"
          href={paths.figmaUrl}
          startIcon={<Iconify width={24} icon="solar:figma-outline" />}
          sx={{ borderColor: 'text.primary' }}
        >
          Figma preview
        </Button>
      </AnimatedDiv>
    </Box>
  );

  const renderIcons = (
    <Stack spacing={3} sx={{ textAlign: 'center' }}>
      <AnimatedDiv>
        <Typography variant="overline" sx={{ opacity: 0.4 }}>
          Available For
        </Typography>
      </AnimatedDiv>

      <Stack spacing={2.5} direction="row">
        {['js', 'ts', 'nextjs', 'vite', 'figma'].map((platform) => (
          <AnimatedDiv key={platform}>
            {platform === 'nextjs' ? (
              <SvgColor
                src={`${CONFIG.assetsDir}/assets/icons/platforms/ic-${platform}.svg`}
                sx={{ width: 24, height: 24 }}
              />
            ) : (
              <Box
                component="img"
                alt={platform}
                src={`${CONFIG.assetsDir}/assets/icons/platforms/ic-${platform}.svg`}
                sx={{ width: 24, height: 24 }}
              />
            )}
          </AnimatedDiv>
        ))}
      </Stack>
    </Stack>
  );

  return (
    <Box
      ref={scroll.elementRef}
      component="section"
      sx={{
        overflow: 'hidden',
        position: 'relative',
        [theme.breakpoints.up(mdKey)]: {
          minHeight: 760,
          height: '100vh',
          maxHeight: 1440,
          display: 'block',
          willChange: 'opacity',
          mt: 'calc(var(--layout-header-desktop-height) * -1)',
        },
        ...sx,
      }}
      {...other}
    >
      <Box
        component={m.div}
        style={{ opacity }}
        sx={{
          width: 1,
          display: 'flex',
          position: 'relative',
          flexDirection: 'column',
          transition: theme.transitions.create(['opacity']),
          [theme.breakpoints.up(mdKey)]: { height: 1, position: 'fixed', maxHeight: 'inherit' },
        }}
      >
        <Container
          component={MotionContainer}
          sx={{
            py: 3,
            gap: 5,
            zIndex: 9,
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            [theme.breakpoints.up(mdKey)]: {
              flex: '1 1 auto',
              justifyContent: 'center',
              py: 'var(--layout-header-desktop-height)',
            },
          }}
        >
          <Stack spacing={3} sx={{ textAlign: 'center' }}>
            <m.div style={{ y: y1 }}>{renderHeading}</m.div>
            <m.div style={{ y: y2 }}>{renderText}</m.div>
          </Stack>
          <m.div style={{ y: y3 }}>{renderRatings}</m.div>
          <m.div style={{ y: y4 }}>{renderButtons}</m.div>
          <m.div style={{ y: y5 }}>{renderIcons}</m.div>
        </Container>

        <HeroBackground />
      </Box>
    </Box>
  );
}

// ----------------------------------------------------------------------

function AnimatedDiv({ children, component = m.div }: BoxProps & { children: React.ReactNode }) {
  return (
    <Box component={component} variants={varFade({ distance: 24 }).inUp}>
      {children}
    </Box>
  );
}

// ----------------------------------------------------------------------

function useTransformY(value: MotionValue<number>, distance: number) {
  const physics = {
    mass: 0.1,
    damping: 20,
    stiffness: 300,
    restDelta: 0.001,
  };

  return useSpring(useTransform(value, [0, 1], [0, distance]), physics);
}

function useScrollPercent() {
  const elementRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();

  const [percent, setPercent] = useState(0);

  useMotionValueEvent(scrollY, 'change', (scrollHeight) => {
    let heroHeight = 0;

    if (elementRef.current) {
      heroHeight = elementRef.current.offsetHeight;
    }

    const scrollPercent = Math.floor((scrollHeight / heroHeight) * 100);

    if (scrollPercent >= 100) {
      setPercent(100);
    } else {
      setPercent(Math.floor(scrollPercent));
    }
  });

  return { elementRef, percent, scrollY };
}
