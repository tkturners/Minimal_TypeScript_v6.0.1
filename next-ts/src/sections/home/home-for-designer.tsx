import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config-global';
import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, AnimateBorder, MotionViewport } from 'src/components/animate';

import { SectionTitle } from './components/section-title';

// ----------------------------------------------------------------------

export function HomeForDesigner({ sx, ...other }: BoxProps) {
  const theme = useTheme();

  const borderTop = (
    <AnimateBorder
      animate={{
        length: 60,
        duration: 24,
        width: '0 4px 4px 0',
        color: theme.vars.palette.primary.light,
        outline: `135deg, ${varAlpha(theme.vars.palette.primary.mainChannel, 0.08)}, ${varAlpha(theme.vars.palette.primary.mainChannel, 0.08)}`,
      }}
      sx={{
        top: 0,
        left: 0,
        width: 1,
        height: 1,
        position: 'absolute',
        borderRadius: '0 0 24px 0',
        background: `linear-gradient(135deg, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.8)} 0%, ${theme.vars.palette.grey[900]} 75%)`,
        display: { xs: 'none', md: 'block' },
      }}
    />
  );

  const borderBottom = (
    <AnimateBorder
      animate={{
        length: 60,
        duration: 24,
        width: '4px 0 0 4px',
        color: theme.vars.palette.common.white,
        outline: `135deg, ${varAlpha(theme.vars.palette.common.whiteChannel, 0.08)}, ${varAlpha(theme.vars.palette.common.whiteChannel, 0.08)}`,
      }}
      sx={{
        right: 0,
        bottom: 0,
        position: 'absolute',
        width: 'calc(50% + 16px)',
        height: 'calc(50% + 16px)',
        borderRadius: '24px 0 0 0',
        bgcolor: varAlpha(theme.vars.palette.grey['900Channel'], 0.48),
        display: { xs: 'none', md: 'block' },
      }}
    />
  );

  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        minHeight: { md: 720 },
        backgroundImage: {
          xs: `linear-gradient(135deg, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.8)} 0%, ${theme.vars.palette.grey[900]} 75%), url(${CONFIG.assetsDir}/assets/images/home/for-designer.webp)`,
          md: `url(${CONFIG.assetsDir}/assets/images/home/for-designer.webp)`,
        },
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: { xs: 'cover', md: 'auto 92%' },
        backgroundColor: 'grey.700',
        ...sx,
      }}
      {...other}
    >
      <MotionViewport>
        <Stack
          spacing={5}
          sx={{
            px: 2,
            py: 15,
            alignItems: 'center',
            [theme.breakpoints.up('md')]: {
              px: 8,
              py: 0,
              top: 0,
              left: 0,
              position: 'absolute',
              justifyContent: 'center',
              alignItems: 'flex-start',
              width: 'calc(50% + 16px)',
              height: 'calc(50% + 16px)',
            },
          }}
        >
          {borderTop}

          <SectionTitle
            caption="professional kit"
            title="For designer"
            description="Use variables and variants to save time and energy on designs, design systems."
            sx={{
              zIndex: 1,
              textAlign: { xs: 'center', md: 'left' },
              alignItems: { xs: 'center', md: 'flex-start' },
            }}
            slotProps={{
              caption: {
                sx: {
                  ...textGradient(
                    `to right, ${theme.vars.palette.common.white}, ${varAlpha(theme.vars.palette.common.whiteChannel, 0.2)}`
                  ),
                },
              },
              title: {
                sx: {
                  ...textGradient(
                    `135deg, ${theme.vars.palette.warning.main}, ${theme.vars.palette.primary.main}`
                  ),
                },
              },
              description: { sx: { maxWidth: 320, color: 'common.white' } },
            }}
          />

          <Box
            component={m.div}
            variants={varFade({ distance: 24 }).inLeft}
            sx={{
              display: 'flex',
              borderRadius: 1.25,
              position: 'relative',
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: { md: 'flex-end' },
            }}
          >
            <AnimateBorder
              animate={{
                duration: 12,
                distance: 40,
                color: [theme.vars.palette.primary.main, theme.vars.palette.warning.main],
                outline: `135deg, ${varAlpha(theme.vars.palette.primary.mainChannel, 0.04)}, ${varAlpha(theme.vars.palette.primary.mainChannel, 0.04)}`,
              }}
              sx={{ width: 1, height: 1, position: 'absolute' }}
            />

            <Button
              size="large"
              color="primary"
              variant="text"
              target="_blank"
              rel="noopener"
              href={paths.components}
              endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
              sx={{ px: 2 }}
            >
              Checkout workspace
            </Button>
          </Box>
        </Stack>

        {borderBottom}
      </MotionViewport>
    </Box>
  );
}
