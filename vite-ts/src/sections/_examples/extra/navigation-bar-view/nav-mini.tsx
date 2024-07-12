import Paper from '@mui/material/Paper';

import { NavSectionMini } from 'src/components/nav-section';

import { NAV_ITEMS } from './data';

// ----------------------------------------------------------------------

export function NavMini() {
  return (
    <Paper
      variant="outlined"
      sx={{
        p: 0.5,
        mx: 'auto',
        maxWidth: 96,
        borderRadius: 1,
      }}
    >
      <NavSectionMini
        data={NAV_ITEMS}
        cssVars={{
          '--nav-item-gap': '8px',
        }}
        slotProps={{
          paper: {},
          rootItem: {
            sx: {},
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
