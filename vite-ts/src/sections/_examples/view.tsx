import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { orderBy } from 'src/utils/helper';

import { varFade, MotionContainer } from 'src/components/animate';

import { ComponentNav } from './component-nav';
import { ComponentCard } from './component-card';
import { ComponentHero } from './component-hero';
import { muiNav, extraNav, foundationNav } from './config-nav-components';

// ----------------------------------------------------------------------

export function ComponentsView() {
  return (
    <>
      <ComponentHero sx={{ py: 15 }}>
        <MotionContainer sx={{ textAlign: 'center' }}>
          <m.div variants={varFade().inUp}>
            <Typography variant="h3" component="h1">
              Components
            </Typography>
          </m.div>

          <m.div variants={varFade().inUp}>
            <Typography sx={{ color: 'text.secondary', mt: 3 }}>
              With huge resource pack making deployment easy and expanding more effectively
            </Typography>
          </m.div>
        </MotionContainer>
      </ComponentHero>

      <Container sx={{ mt: 10, mb: 15 }}>
        <Stack direction={{ xs: 'column', md: 'row' }} alignItems={{ md: 'flex-start' }}>
          <ComponentNav />

          <Stack divider={<Divider sx={{ borderStyle: 'dashed', my: 8 }} />}>
            <Stack spacing={3}>
              <Stack spacing={1}>
                <Typography variant="h5">Foundation</Typography>

                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Colors, typography, shadows…
                </Typography>
              </Stack>

              <Grid>
                {foundationNav.map((item) => (
                  <ComponentCard key={item.name} item={item} />
                ))}
              </Grid>
            </Stack>

            <Stack spacing={3}>
              <Stack spacing={1}>
                <Typography variant="h5">MUI</Typography>

                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Components from{' '}
                  <Link href="https://mui.com/components/" target="_blank" rel="noopener">
                    Material UI
                  </Link>
                  .
                </Typography>

                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  <i>
                    Some advanced components from MUI X will not be included. So you need to
                    purchase a separate
                    <Link
                      href="https://mui.com/pricing/"
                      target="_blank"
                      rel="noopener"
                      sx={{ ml: 0.5 }}
                    >
                      license
                    </Link>
                    .
                  </i>
                </Typography>
              </Stack>

              <Grid>
                {orderBy(muiNav, ['name'], ['asc']).map((item) => (
                  <ComponentCard key={item.name} item={item} />
                ))}
              </Grid>
            </Stack>

            <Stack spacing={3}>
              <Stack spacing={1}>
                <Typography variant="h5">Extra Components</Typography>

                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Some custom components / use 3rd party dependencies (chart, map, editor…).
                </Typography>
              </Stack>

              <Grid>
                {orderBy(extraNav, ['name'], ['asc']).map((item) => (
                  <ComponentCard key={item.name} item={item} />
                ))}
              </Grid>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}

// ----------------------------------------------------------------------

function Grid({ children }: BoxProps) {
  return (
    <Box
      rowGap={3}
      display="grid"
      columnGap={2.5}
      gridTemplateColumns={{
        xs: 'repeat(2, 1fr)',
        sm: 'repeat(3, 1fr)',
        md: 'repeat(4, 1fr)',
        lg: 'repeat(5, 1fr)',
      }}
    >
      {children}
    </Box>
  );
}
