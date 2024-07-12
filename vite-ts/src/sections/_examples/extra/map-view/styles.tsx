import { styled } from '@mui/material/styles';

import { bgBlur, varAlpha } from 'src/theme/styles';

// ----------------------------------------------------------------------

export const StyledControlPanel = styled('div')(({ theme }) => ({
  ...bgBlur({ color: varAlpha(theme.vars.palette.grey['900Channel'], 0.8) }),
  zIndex: 9,
  minWidth: 200,
  position: 'absolute',
  top: theme.spacing(1),
  right: theme.spacing(1),
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius * 1.5,
}));
