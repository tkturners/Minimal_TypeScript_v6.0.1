import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';

import { MegaMenuVertical } from 'src/components/mega-menu';

import { navItems1 } from './data';

// ----------------------------------------------------------------------

export function DemoMegaMenuVertical() {
  return (
    <Stack direction="row" spacing={3} sx={{ height: 640, width: 1 }}>
      <Paper
        variant="outlined"
        sx={{
          width: 260,
          flexShrink: 0,
          display: 'flex',
          borderRadius: 2,
          flexDirection: 'column',
        }}
      >
        <Typography variant="h6" sx={{ p: 2 }}>
          Vertical menu
        </Typography>

        <Divider sx={{ mb: 2 }} />

        <MegaMenuVertical
          data={navItems1}
          cssVars={{
            '--nav-item-gap': '8px',
          }}
          slotProps={{
            rootItem: {
              sx: { typography: 'subtitle1' },
              icon: {},
              title: { fontFamily: (theme) => theme.typography.fontSecondaryFamily },
              info: {},
              arrow: {},
            },
            subItem: {},
            paper: { top: 40 },
            subheader: {},
            tags: {},
            moreLink: {},
            carousel: { sx: {}, displayCount: 8 },
          }}
        />
      </Paper>

      <Box
        sx={{
          height: 1,
          borderRadius: 2,
          flex: '1 1 auto',
          bgcolor: (theme) => varAlpha(theme.vars.palette.grey['500Channel'], 0.04),
          border: (theme) => `dashed 1px ${theme.vars.palette.divider}`,
        }}
      />
    </Stack>
  );
}
