import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';
import { MegaMenuHorizontal } from 'src/components/mega-menu';

import { navItems2 } from './data';

// ----------------------------------------------------------------------

export function DemoMegaMenuHorizontal() {
  return (
    <AppBar
      position="sticky"
      sx={{ bgcolor: 'background.paper', boxShadow: (theme) => theme.customShadows.z8 }}
    >
      <Toolbar component={Container}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Horizontal menu
        </Typography>

        <MegaMenuHorizontal
          data={navItems2}
          render={{
            navIcon: NAV_ICONS,
            navInfo: NAV_INFO,
          }}
          cssVars={{
            '--nav-item-gap': '8px',
          }}
          slotProps={{
            rootItem: {
              sx: {},
              icon: {},
              title: {
                typography: 'subtitle1',
                fontFamily: (theme) => theme.typography.fontSecondaryFamily,
              },
              info: {},
              arrow: {},
            },
            subItem: {},
            paper: {},
            subheader: {},
            tags: {},
            moreLink: {},
            carousel: { sx: {}, displayCount: 8 },
          }}
        />
      </Toolbar>
    </AppBar>
  );
}

// ----------------------------------------------------------------------

const NAV_ICONS = {
  'icon.item1': <Iconify icon="solar:home-2-outline" />,
  'icon.item2': <Iconify icon="solar:atom-outline" />,
  'icon.item3': <Iconify icon="solar:chart-square-outline" />,
  'icon.item4': <Iconify icon="solar:confetti-minimalistic-outline" />,
  'icon.item5': <Iconify icon="solar:gallery-circle-outline" />,
};

const NAV_INFO = (val: string) => ({
  'info.item3': <Label color="info">{val}</Label>,
  'info.item4': <>{val}</>,
});
