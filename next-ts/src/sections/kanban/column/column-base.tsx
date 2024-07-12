import type { Theme, SxProps } from '@mui/material/styles';

import { memo, forwardRef } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

import { varAlpha, stylesMode } from 'src/theme/styles';

import { kanbanClasses } from '../classes';

// ----------------------------------------------------------------------

export const StyledRoot = styled(Stack)(({ theme }) => ({
  flexShrink: 0,
  height: '100%',
  borderWidth: 1,
  position: 'relative',
  borderStyle: 'solid',
  borderColor: 'transparent',
  padding: 'var(--column-padding)',
  borderRadius: 'var(--column-radius)',
  backgroundColor: theme.vars.palette.background.neutral,
  [stylesMode.dark]: { backgroundColor: theme.vars.palette.grey[800] },
  '&::before': {
    top: 0,
    left: 0,
    content: '""',
    width: '100%',
    height: '100%',
    position: 'absolute',
    borderRadius: 'inherit',
    backgroundColor: 'transparent',
    transition: theme.transitions.create(['background-color']),
  },
  [`&.${kanbanClasses.state.hover}`]: {
    '&::before': {
      backgroundColor: varAlpha(theme.vars.palette.grey['500Channel'], 0.08),
      [stylesMode.dark]: { backgroundColor: varAlpha(theme.vars.palette.grey['500Channel'], 0.16) },
    },
  },
  [`&.${kanbanClasses.state.dragOverlay}`]: {
    backdropFilter: `blur(6px)`,
    borderColor: varAlpha(theme.vars.palette.grey['500Channel'], 0.08),
    backgroundColor: varAlpha(theme.vars.palette.background.neutralChannel, 0.48),
    [stylesMode.dark]: { backgroundColor: varAlpha(theme.vars.palette.grey['800Channel'], 0.48) },
  },
  [`&.${kanbanClasses.state.dragging}`]: { opacity: 0 },
}));

// ----------------------------------------------------------------------

type ColumnBaseProps = {
  slots?: {
    header?: React.ReactNode;
    main?: React.ReactNode;
    action?: React.ReactNode;
  };
  stateProps?: {
    hover?: boolean;
    dragOverlay?: boolean;
    dragging?: boolean;
    handleProps?: any;
  };
  sx?: SxProps<Theme>;
};

const ColumnBase = forwardRef<HTMLDivElement, ColumnBaseProps>(
  ({ slots, stateProps, sx, ...other }, ref) => {
    const className = kanbanClasses.column.concat(
      (stateProps?.hover && ` ${kanbanClasses.state.hover}`) ||
        (stateProps?.dragOverlay && ` ${kanbanClasses.state.dragOverlay}`) ||
        (stateProps?.dragging && ` ${kanbanClasses.state.dragging}`) ||
        ''
    );

    return (
      <StyledRoot
        ref={ref}
        className={className}
        sx={{ gap: 2.5, width: 'var(--column-width)', ...sx }}
        {...other}
      >
        {slots?.header && slots.header}

        {slots?.action && slots?.action}

        {slots?.main && (
          <Box
            component="ul"
            className={kanbanClasses.columnList}
            sx={{
              minHeight: 80,
              display: 'flex',
              gap: 'var(--item-gap)',
              flexDirection: 'column',
            }}
          >
            {slots.main}
          </Box>
        )}
      </StyledRoot>
    );
  }
);

export default memo(ColumnBase);
