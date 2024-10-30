import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Link, { linkClasses } from '@mui/material/Link';
import ListSubheader, { listSubheaderClasses } from '@mui/material/ListSubheader';

import { RouterLink } from 'src/routes/components';

import { orderBy } from 'src/utils/helper';

import { hideScrollY } from 'src/theme/styles';

import { muiNav, extraNav, foundationNav } from './config-nav-components';

// ----------------------------------------------------------------------

export function ComponentNav() {
  const theme = useTheme();

  return (
    <Stack
      component="nav"
      sx={{
        ...hideScrollY,
        width: 280,
        flexShrink: 0,
        position: 'sticky',
        display: { xs: 'none', md: 'flex' },
        top: 'calc(var(--layout-header-desktop-height) + 24px)',
        maxHeight: 'calc(100vh - var(--layout-header-desktop-height) * 2)',
        [`& .${listSubheaderClasses.root}`]: {
          mt: 0,
          mx: 0,
          mb: 1,
          p: 0,
          color: 'text.primary',
          typography: 'overline',
        },
        [`& .${linkClasses.root}`]: {
          typography: 'body2',
          color: 'text.secondary',
          fontSize: theme.typography.pxToRem(13),
          '&:hover': { color: 'text.primary' },
        },
        '& ul': {
          display: 'flex',
          flexDirection: 'column',
        },
        '& li': {
          display: 'flex',
        },
      }}
    >
      <Box component="ul" sx={{ gap: 2 }}>
        <Box component="li" sx={{ flexDirection: 'column' }}>
          <ListSubheader disableSticky component="h6">
            Foundation
          </ListSubheader>
          <Box component="ul" sx={{ gap: 0.5 }}>
            {foundationNav.map((item) => (
              <Box key={item.name} component="li">
                <Link component={RouterLink} href={item.href}>
                  {item.name}
                </Link>
              </Box>
            ))}
          </Box>
        </Box>

        <Box component="li" sx={{ flexDirection: 'column' }}>
          <ListSubheader disableSticky component="h6">
            MUI
          </ListSubheader>
          <Box component="ul" sx={{ gap: 0.5 }}>
            {orderBy(muiNav, ['name'], ['asc']).map((item) => (
              <Box key={item.name} component="li">
                <Link component={RouterLink} href={item.href}>
                  {item.name}
                </Link>
              </Box>
            ))}
          </Box>
        </Box>

        <Box component="li" sx={{ flexDirection: 'column' }}>
          <ListSubheader disableSticky component="h6">
            Extra
          </ListSubheader>
          <Box component="ul" sx={{ gap: 0.5 }}>
            {orderBy(extraNav, ['name'], ['asc']).map((item) => (
              <Box key={item.name} component="li">
                <Link component={RouterLink} href={item.href}>
                  {item.name}
                </Link>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Stack>
  );
}
