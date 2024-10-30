import type { Theme, SxProps } from '@mui/material/styles';
import type { ButtonBaseProps } from '@mui/material/ButtonBase';

import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import ButtonBase from '@mui/material/ButtonBase';

import { varAlpha, stylesMode } from 'src/theme/styles';

import { Iconify } from '../../iconify';
import { svgColorClasses } from '../../svg-color';

// ----------------------------------------------------------------------

type Props = {
  title: string;
  tooltip?: string;
  sx?: SxProps<Theme>;
  children: React.ReactNode;
};

export function Block({ title, tooltip, children, sx }: Props) {
  return (
    <Box
      sx={{
        px: 2,
        pb: 2,
        pt: 4,
        borderRadius: 2,
        display: 'flex',
        position: 'relative',
        flexDirection: 'column',
        border: (theme) => `solid 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}`,
        ...sx,
      }}
    >
      <Box
        component="span"
        sx={{
          px: 1.25,
          top: -12,
          fontSize: 13,
          borderRadius: 22,
          lineHeight: '22px',
          position: 'absolute',
          alignItems: 'center',
          color: 'common.white',
          display: 'inline-flex',
          bgcolor: 'text.primary',
          fontWeight: 'fontWeightSemiBold',
          [stylesMode.dark]: { color: 'grey.800' },
        }}
      >
        {title}

        {tooltip && (
          <Tooltip title={tooltip} placement="right">
            <Iconify
              width={14}
              icon="eva:info-outline"
              sx={{ ml: 0.5, mr: -0.5, opacity: 0.48, cursor: 'pointer' }}
            />
          </Tooltip>
        )}
      </Box>

      {children}
    </Box>
  );
}

// ----------------------------------------------------------------------

type BlockOptionProps = ButtonBaseProps & {
  selected?: boolean;
  icon?: React.ReactNode;
  label?: React.ReactNode;
};

export function BlockOption({ icon, label, selected, sx, ...other }: BlockOptionProps) {
  return (
    <ButtonBase
      disableRipple
      sx={{
        '--border-color': (theme) => varAlpha(theme.vars.palette.grey['500Channel'], 0.08),
        '--active-color': (theme) =>
          `linear-gradient(135deg, ${theme.vars.palette.primary.light}, ${theme.vars.palette.primary.main})`,
        width: 1,
        borderRadius: 1.5,
        lineHeight: '18px',
        color: 'text.disabled',
        border: `solid 1px transparent`,
        fontWeight: 'fontWeightSemiBold',
        fontSize: (theme) => theme.typography.pxToRem(13),
        ...(selected && {
          color: 'text.primary',
          bgcolor: 'background.paper',
          borderColor: 'var(--border-color)',
          boxShadow: (theme) =>
            `-8px 8px 20px -4px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}`,
          [stylesMode.dark]: {
            boxShadow: (theme) =>
              `-8px 8px 20px -4px ${varAlpha(theme.vars.palette.common.blackChannel, 0.12)}`,
          },
          [`& .${svgColorClasses.root}`]: {
            background: 'var(--active-color)',
          },
        }),
        ...sx,
      }}
      {...other}
    >
      {icon && icon}
      {label && label}
    </ButtonBase>
  );
}
