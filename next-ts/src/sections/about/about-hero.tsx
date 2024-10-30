import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config-global';

import { varFade, AnimateText, MotionContainer, animateTextClasses } from 'src/components/animate';

// ----------------------------------------------------------------------

export function AboutHero({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      sx={{
        height: { md: 560 },
        py: { xs: 10, md: 0 },
        overflow: 'hidden',
        position: 'relative',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${CONFIG.assetsDir}/assets/background/overlay.svg), url(${CONFIG.assetsDir}/assets/images/about/hero.webp)`,
        ...sx,
      }}
      {...other}
    >
      <Container component={MotionContainer}>
        <Box
          sx={{
            bottom: { md: 80 },
            position: { md: 'absolute' },
            textAlign: { xs: 'center', md: 'unset' },
          }}
        >
          <AnimateText
            component="h1"
            variant="h1"
            text={['Who', 'we are?']}
            variants={varFade({ distance: 24 }).inRight}
            sx={{
              color: 'common.white',
              [`& .${animateTextClasses.line}[data-index="0"]`]: {
                [`& .${animateTextClasses.word}[data-index="0"]`]: { color: 'primary.main' },
              },
            }}
          />

          <m.div variants={varFade({ distance: 24 }).inUp}>
            <Typography
              variant="h4"
              sx={{ mt: 3, color: 'common.white', fontWeight: 'fontWeightSemiBold' }}
            >
              Let&apos;s work together and
              <br /> make awesome site easily
            </Typography>
          </m.div>
        </Box>
      </Container>
    </Box>
  );
}
