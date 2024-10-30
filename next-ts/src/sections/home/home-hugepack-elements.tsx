import type { BoxProps } from '@mui/material/Box';
import type { MotionProps, MotionValue } from 'framer-motion';

import { useRef, useState, forwardRef } from 'react';
import { m, useSpring, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';

import { useClientRect } from 'src/hooks/use-client-rect';

import { CONFIG } from 'src/config-global';
import { stylesMode } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SectionTitle, SectionCaption } from './components/section-title';
import { FloatLine, FloatTriangleLeftIcon } from './components/svg-elements';

// ----------------------------------------------------------------------

export function HomeHugePackElements({ sx, ...other }: BoxProps) {
  const renderLines = (
    <>
      <FloatTriangleLeftIcon sx={{ top: 80, left: 80, opacity: 0.4 }} />
      <FloatLine vertical sx={{ top: 0, left: 80 }} />
    </>
  );

  return (
    <Box component="section" sx={{ pt: 10, position: 'relative', ...sx }} {...other}>
      <MotionViewport>
        {renderLines}

        <Container sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          <Grid
            container
            disableEqualOverflow
            rowSpacing={{ xs: 3, md: 0 }}
            columnSpacing={{ xs: 0, md: 8 }}
          >
            <Grid xs={12} md={6} lg={7}>
              <SectionCaption title="Interface Starter Kit" />
              <SectionTitle title="Large bundle of" txtGradient="elements" sx={{ mt: 3 }} />
            </Grid>

            <Grid xs={12} md={6} lg={5}>
              <m.div variants={varFade({ distance: 24 }).inUp}>
                <Typography
                  sx={{ color: 'text.disabled', fontSize: { md: 20 }, lineHeight: { md: 36 / 20 } }}
                >
                  <Box component="span" sx={{ color: 'text.primary' }}>
                    Explore a comprehensive range of elements
                  </Box>
                  <br />
                  like menus, sliders, buttons, inputs, and others, all conveniently gathered here.
                </Typography>
              </m.div>
            </Grid>
          </Grid>

          <m.div variants={varFade({ distance: 24 }).inUp}>
            <Button
              size="large"
              color="inherit"
              variant="outlined"
              target="_blank"
              rel="noopener"
              href={paths.components}
              endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
              sx={{ mt: 5, mx: 'auto' }}
            >
              Browse components
            </Button>
          </m.div>
        </Container>
      </MotionViewport>

      <ScrollContent />
    </Box>
  );
}

// ----------------------------------------------------------------------

const StyledRoot = styled(
  forwardRef((props: BoxProps & MotionProps, ref) => <Box ref={ref} component={m.div} {...props} />)
)(({ theme }) => ({
  zIndex: 9,
  position: 'relative',
  paddingTop: theme.spacing(5),
  [theme.breakpoints.up('md')]: { paddingTop: theme.spacing(15) },
}));

const StyledContainer = styled((props: MotionProps & Omit<BoxProps, 'style'>) => (
  <Box component={m.div} {...props} />
))(({ theme }) => ({
  top: 0,
  height: '100vh',
  display: 'flex',
  position: 'sticky',
  overflow: 'hidden',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  transition: theme.transitions.create(['background-color']),
  '&[data-scrolling="true"]': { justifyContent: 'center' },
}));

const StyledContent = styled(
  forwardRef((props: BoxProps & MotionProps, ref) => (
    <Box ref={ref} component={m.div} transition={{ ease: 'linear', duration: 0.25 }} {...props} />
  ))
)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  [theme.breakpoints.up('md')]: { gap: theme.spacing(5) },
}));

const StyledItem = styled((props: BoxProps & MotionProps) => <Box component={m.div} {...props} />)({
  backgroundSize: 'auto 100%',
  backgroundRepeat: 'repeat-x',
  backgroundPosition: 'center center',
});

// ----------------------------------------------------------------------

function ScrollContent() {
  const theme = useTheme();

  const containerRef = useRef<HTMLDivElement>(null);
  const containerRect = useClientRect(containerRef);

  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollRect = useClientRect(scrollRef);

  const [startScroll, setStartScroll] = useState(false);

  const { scrollYProgress } = useScroll({ target: containerRef });

  const physics = { damping: 16, mass: 0.16, stiffness: 50 };

  const scrollRange = -scrollRect.scrollWidth + containerRect.width;

  const x1 = useSpring(useTransform(scrollYProgress, [0, 1], [0, scrollRange]), physics);
  const x2 = useSpring(useTransform(scrollYProgress, [0, 1], [scrollRange, 0]), physics);

  const background: MotionValue<string> = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [
      theme.vars.palette.background.default,
      theme.vars.palette.background.neutral,
      theme.vars.palette.background.neutral,
      theme.vars.palette.background.neutral,
      theme.vars.palette.background.default,
    ]
  );

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest !== 0 && latest !== 1) {
      setStartScroll(true);
    } else {
      setStartScroll(false);
    }
  });

  return (
    <StyledRoot ref={containerRef} sx={{ height: scrollRect.scrollWidth, minHeight: '100vh' }}>
      <StyledContainer style={{ background }} data-scrolling={startScroll}>
        <StyledContent ref={scrollRef} layout>
          <StyledItem
            style={{ x: x1 }}
            sx={{
              height: { xs: 160, md: 180 },
              width: { xs: '600%', md: '400%' },
              backgroundImage: `url(${CONFIG.assetsDir}/assets/images/home/bundle-light-1.webp)`,
              [stylesMode.dark]: {
                backgroundImage: `url(${CONFIG.assetsDir}/assets/images/home/bundle-dark-1.webp)`,
              },
            }}
          />
          <StyledItem
            style={{ x: x2 }}
            sx={{
              height: { xs: 400, md: 480 },
              width: { xs: '600%', md: '400%' },
              backgroundImage: `url(${CONFIG.assetsDir}/assets/images/home/bundle-light-2.webp)`,
              [stylesMode.dark]: {
                backgroundImage: `url(${CONFIG.assetsDir}/assets/images/home/bundle-dark-2.webp)`,
              },
            }}
          />
        </StyledContent>
      </StyledContainer>
    </StyledRoot>
  );
}
