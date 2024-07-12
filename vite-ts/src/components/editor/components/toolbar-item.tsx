import type { ButtonBaseProps } from '@mui/material/ButtonBase';

import SvgIcon from '@mui/material/SvgIcon';
import ButtonBase from '@mui/material/ButtonBase';

import type { EditorToolbarItemProps } from '../types';

// ----------------------------------------------------------------------

export function ToolbarItem({
  sx,
  icon,
  label,
  active,
  disabled,
  ...other
}: ButtonBaseProps & EditorToolbarItemProps) {
  return (
    <ButtonBase
      sx={{
        px: 0.75,
        width: 28,
        height: 28,
        borderRadius: 0.75,
        typography: 'body2',
        '&:hover': { bgcolor: 'action.hover' },
        ...(active && { bgcolor: 'action.selected' }),
        ...(disabled && { pointerEvents: 'none', cursor: 'not-allowed', opacity: 0.48 }),
        ...sx,
      }}
      {...other}
    >
      {icon && <SvgIcon sx={{ fontSize: 18 }}>{icon}</SvgIcon>}

      {label && label}
    </ButtonBase>
  );
}
