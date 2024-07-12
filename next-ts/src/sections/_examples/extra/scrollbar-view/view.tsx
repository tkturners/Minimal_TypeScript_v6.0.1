'use client';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';

import { Scrollbar } from 'src/components/scrollbar';
import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { ComponentHero } from '../../component-hero';
import { ComponentBlock, ComponentContainer } from '../../component-block';

// ----------------------------------------------------------------------

export function ScrollbarView() {
  return (
    <>
      <ComponentHero>
        <CustomBreadcrumbs
          heading="Scrollbar"
          links={[{ name: 'Components', href: paths.components }, { name: 'Scrollbar' }]}
        />
      </ComponentHero>

      <ComponentContainer>
        <Box
          gap={3}
          display="grid"
          alignItems="flex-start"
          gridTemplateColumns={{ xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
        >
          <ComponentBlock title="Vertical" sx={{ flexDirection: 'column', alignItems: 'unset' }}>
            <Scrollbar
              sx={{
                p: 3,
                height: 320,
                borderRadius: 1,
                border: (theme) => `solid 1px ${theme.vars.palette.divider}`,
              }}
            >
              Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi. Quisque ut nisi.
              Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam. Vestibulum
              eu odio. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Cras ultricies mi
              eu turpis hendrerit fringilla. Phasellus consectetuer vestibulum elit. Phasellus
              magna. Nullam tincidunt adipiscing enim. Vestibulum volutpat pretium libero. Nullam
              quis ante. Morbi mollis tellus ac sapien. Donec orci lectus, aliquam ut, faucibus non,
              euismod id, nulla. Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Fusce ac felis sit amet ligula pharetra
              condimentum. Morbi mattis ullamcorper velit. Vivamus consectetuer hendrerit lacus.
              Nullam quis ante. Praesent turpis. Praesent porttitor, nulla vitae posuere iaculis,
              arcu nisl dignissim dolor, a pretium mi sem ut ipsum. Donec mi odio, faucibus at,
              scelerisque quis, convallis in, nisi. Quisque ut nisi. Suspendisse nisl elit, rhoncus
              eget, elementum ac, condimentum eget, diam. Vestibulum eu odio. Proin sapien ipsum,
              porta a, auctor quis, euismod ut, mi. Cras ultricies mi eu turpis hendrerit fringilla.
              Phasellus consectetuer vestibulum elit. Phasellus magna. Nullam tincidunt adipiscing
              enim. Vestibulum volutpat pretium libero. Nullam quis ante. Morbi mollis tellus ac
              sapien. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce
              ac felis sit amet ligula pharetra condimentum. Morbi mattis ullamcorper velit. Vivamus
              consectetuer hendrerit lacus. Nullam quis ante. Praesent turpis. Praesent porttitor,
              nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi sem ut ipsum.
            </Scrollbar>
          </ComponentBlock>

          <ComponentBlock title="Horizontal" sx={{ flexDirection: 'column', alignItems: 'unset' }}>
            <Scrollbar
              sx={{
                p: 3,
                height: 320,
                borderRadius: 1,
                border: (theme) => `solid 1px ${theme.vars.palette.divider}`,
              }}
            >
              <Box sx={{ width: '200%' }}>
                Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi. Quisque ut nisi.
                Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam.
                Vestibulum eu odio. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Cras
                ultricies mi eu turpis hendrerit fringilla. Phasellus consectetuer vestibulum elit.
                Phasellus magna. Nullam tincidunt adipiscing enim. Vestibulum volutpat pretium
                libero. Nullam quis ante. Morbi mollis tellus ac sapien. Donec orci lectus, aliquam
                ut, faucibus non, euismod id, nulla. Pellentesque habitant morbi tristique senectus
                et netus et malesuada fames ac turpis egestas. Fusce ac felis sit amet ligula
                pharetra condimentum. Morbi mattis ullamcorper velit. Vivamus consectetuer hendrerit
                lacus. Nullam quis ante. Praesent turpis. Praesent porttitor, nulla vitae posuere
                iaculis, arcu nisl dignissim dolor, a pretium mi sem ut ipsum. Donec mi odio,
                faucibus at, scelerisque quis, convallis in, nisi. Quisque ut nisi. Suspendisse nisl
                elit, rhoncus eget, elementum ac, condimentum eget, diam. Vestibulum eu odio. Proin
                sapien ipsum, porta a, auctor quis, euismod ut, mi. Cras ultricies mi eu turpis
                hendrerit fringilla. Phasellus consectetuer vestibulum elit. Phasellus magna. Nullam
                tincidunt adipiscing enim. Vestibulum volutpat pretium libero. Nullam quis ante.
                Morbi mollis tellus ac sapien. Donec orci lectus, aliquam ut, faucibus non, euismod
                id, nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada
                fames ac turpis egestas. Fusce ac felis sit amet ligula pharetra condimentum. Morbi
                mattis ullamcorper velit. Vivamus consectetuer hendrerit lacus. Nullam quis ante.
                Praesent turpis. Praesent porttitor, nulla vitae posuere iaculis, arcu nisl
                dignissim dolor, a pretium mi sem ut ipsum.
              </Box>
            </Scrollbar>
          </ComponentBlock>
        </Box>

        <ComponentBlock
          title="Layout"
          sx={{
            px: 5,
            py: 5,
            alignItems: 'unset',
            flexDirection: 'column',
          }}
        >
          <Stack
            direction="column"
            sx={{
              height: 560,
              borderRadius: 1,
              border: (theme) => `solid 1px ${theme.vars.palette.divider}`,
            }}
          >
            <Stack
              sx={{
                p: 3,
                typography: 'subtitle2',
                bgcolor: 'text.primary',
                color: 'background.default',
              }}
            >
              Top
            </Stack>

            <Stack direction={{ xs: 'column', md: 'row' }} sx={{ minHeight: 0, flex: '1 1 auto' }}>
              <Stack
                sx={{
                  p: 3,
                  typography: 'subtitle2',
                  flex: { xs: '0 0 72px', md: '0 0 240px' },
                  borderRight: (theme) => `solid 1px ${theme.vars.palette.divider}`,
                }}
              >
                Left
              </Stack>

              <Stack
                sx={{
                  minWidth: 0,
                  minHeight: 0,
                  flex: '1 1 auto',
                  bgcolor: 'background.neutral',
                }}
              >
                <Alert severity="success" sx={{ borderRadius: 0 }}>
                  Here is a gentle confirmation that your action was successful.
                </Alert>

                <Scrollbar sx={{ px: 3, py: 3 }}>
                  <Typography variant="h6" paragraph>
                    Vestibulum ante ipsum primis in
                  </Typography>
                  <Typography paragraph>
                    Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi. Quisque ut
                    nisi. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam.
                    Vestibulum eu odio. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi.
                    Cras ultricies mi eu turpis hendrerit fringilla. Phasellus consectetuer
                    vestibulum elit. Phasellus magna. Nullam tincidunt adipiscing enim. Vestibulum
                    volutpat pretium libero. Nullam quis ante. Morbi mollis tellus ac sapien. Donec
                    orci lectus, aliquam ut, faucibus non, euismod id, nulla. Pellentesque habitant
                    morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce ac
                    felis sit amet ligula pharetra condimentum. Morbi mattis ullamcorper velit.
                    Vivamus consectetuer hendrerit lacus. Nullam quis ante. Praesent turpis.
                    Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a
                    pretium mi sem ut ipsum. Donec mi odio, faucibus at, scelerisque quis, convallis
                    in, nisi. Quisque ut nisi.
                  </Typography>
                  <Typography paragraph>
                    Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam.
                    Vestibulum eu odio. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi.
                    Cras ultricies mi eu turpis hendrerit fringilla. Phasellus consectetuer
                    vestibulum elit. Phasellus magna. Nullam tincidunt adipiscing enim. Vestibulum
                    volutpat pretium libero. Nullam quis ante. Morbi mollis tellus ac sapien. Donec
                    orci lectus, aliquam ut, faucibus non, euismod id, nulla. Pellentesque habitant
                    morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce ac
                    felis sit amet ligula pharetra condimentum. Morbi mattis ullamcorper velit.
                    Vivamus consectetuer hendrerit lacus. Nullam quis ante. Praesent turpis.
                    Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a
                    pretium mi sem ut ipsum.
                  </Typography>

                  <Paper variant="outlined" sx={{ width: 1, aspectRatio: '16/9' }} />
                </Scrollbar>
              </Stack>

              <Stack
                sx={{
                  p: 3,
                  typography: 'subtitle2',
                  flex: { xs: '0 0 72px', md: '0 0 240px' },
                  borderLeft: (theme) => `solid 1px ${theme.vars.palette.divider}`,
                }}
              >
                Right
              </Stack>
            </Stack>

            <Stack
              sx={{
                p: 3,
                typography: 'subtitle2',
                borderTop: (theme) => `solid 1px ${theme.vars.palette.divider}`,
              }}
            >
              Bottom
            </Stack>
          </Stack>
        </ComponentBlock>
      </ComponentContainer>
    </>
  );
}
