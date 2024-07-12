import { forwardRef } from 'react';

import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { useNavItem } from 'src/components/nav-section/hooks';

import type { NavItemProps, NavItemStateProps } from '../types';

// ----------------------------------------------------------------------

export const NavItem = forwardRef<HTMLButtonElement, NavItemProps>(
  ({ title, path, icon, open, active, hasChild, externalLink, ...other }, ref) => {
    const navItem = useNavItem({
      path,
      icon,
      hasChild,
      externalLink,
    });

    return (
      <StyledNavItem
        ref={ref}
        aria-label={title}
        open={open}
        active={active}
        {...navItem.baseProps}
        {...other}
      >
        {navItem.renderIcon}

        <Box component="span" sx={{ flex: '1 1 auto' }}>
          {title}
        </Box>

        {hasChild && (
          <Iconify
            width={16}
            icon={open ? 'eva:arrow-ios-downward-fill' : 'eva:arrow-ios-forward-fill'}
          />
        )}
      </StyledNavItem>
    );
  }
);

// ----------------------------------------------------------------------

const StyledNavItem = styled(ButtonBase, {
  shouldForwardProp: (prop) => prop !== 'active' && prop !== 'open',
})<NavItemStateProps>(({ active, open, theme }) => ({
  ...theme.typography.body2,
  gap: 16,
  height: 48,
  width: '100%',
  paddingLeft: theme.spacing(2.5),
  paddingRight: theme.spacing(1.5),
  color: theme.vars.palette.text.secondary,
  fontWeight: theme.typography.fontWeightMedium,
  ...(active && {
    color: theme.vars.palette.primary.main,
    fontWeight: theme.typography.fontWeightSemiBold,
    backgroundColor: varAlpha(theme.vars.palette.primary.mainChannel, 0.08),
    '&:hover': { backgroundColor: varAlpha(theme.vars.palette.primary.mainChannel, 0.16) },
  }),
  ...(open && {
    color: theme.vars.palette.text.primary,
    backgroundColor: theme.vars.palette.action.hover,
  }),
}));
