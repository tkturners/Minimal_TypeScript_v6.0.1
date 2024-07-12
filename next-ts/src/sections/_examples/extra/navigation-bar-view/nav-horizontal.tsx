import Paper from '@mui/material/Paper';

import { NavSectionHorizontal } from 'src/components/nav-section';

import { NAV_ITEMS } from './data';

// ----------------------------------------------------------------------

export function NavHorizontal() {
  return (
    <Paper
      variant="outlined"
      sx={{
        px: 2,
        height: 80,
        borderRadius: 2,
      }}
    >
      <NavSectionHorizontal
        data={NAV_ITEMS}
        cssVars={{
          '--nav-item-gap': '24px',
        }}
        slotProps={{
          paper: {},
          rootItem: {
            sx: {
              typography: 'subtitle1',
              fontFamily: (theme) => theme.typography.fontSecondaryFamily,
            },
            icon: {},
            title: {},
            caption: {},
            info: {},
            arrow: {},
          },
          subItem: {
            sx: {},
            icon: {},
            title: {},
            caption: {},
            info: {},
            arrow: {},
          },
        }}
      />
    </Paper>
  );
}
