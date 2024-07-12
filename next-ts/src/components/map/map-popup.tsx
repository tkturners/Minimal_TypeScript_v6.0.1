import type { PopupProps } from 'react-map-gl';
import type { BoxProps } from '@mui/material/Box';

import { Popup } from 'react-map-gl';

import Box from '@mui/material/Box';

// ----------------------------------------------------------------------

export function MapPopup({ sx, children, ...other }: PopupProps & BoxProps) {
  return (
    <Box component={Popup} anchor="bottom" sx={sx} {...other}>
      {children}
    </Box>
  );
}
