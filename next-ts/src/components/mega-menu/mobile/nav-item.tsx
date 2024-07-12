import { forwardRef } from 'react';

import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';

import { Iconify } from '../../iconify';
import { useNavItem, stateClasses, sharedStyles, navSectionClasses } from '../../nav-section';

import type { NavItemProps, NavItemStateProps } from '../types';

// ----------------------------------------------------------------------

export const NavItem = forwardRef<HTMLButtonElement, NavItemProps>(
  (
    {
      path,
      icon,
      info,
      title,
      //
      open,
      render,
      active,
      hasChild,
      disabled,
      slotProps,
      externalLink,
      enabledRootRedirect,
      ...other
    },
    ref
  ) => {
    const navItem = useNavItem({
      path,
      icon,
      info,
      render,
      hasChild,
      externalLink,
      enabledRootRedirect,
    });

    return (
      <StyledNavItem
        ref={ref}
        aria-label={title}
        open={open}
        active={active}
        disabled={disabled}
        className={stateClasses({ open: open && !active, active, disabled })}
        sx={{
          ...slotProps?.sx,
          [`& .${navSectionClasses.item.icon}`]: slotProps?.icon,
          [`& .${navSectionClasses.item.title}`]: slotProps?.title,
          [`& .${navSectionClasses.item.info}`]: slotProps?.info,
          [`& .${navSectionClasses.item.arrow}`]: slotProps?.arrow,
        }}
        {...navItem.baseProps}
        {...other}
      >
        {icon && (
          <Box component="span" className={navSectionClasses.item.icon}>
            {navItem.renderIcon}
          </Box>
        )}

        {title && (
          <Box component="span" className={navSectionClasses.item.title}>
            {title}
          </Box>
        )}

        {info && (
          <Box component="span" className={navSectionClasses.item.info}>
            {navItem.renderInfo}
          </Box>
        )}

        {hasChild && (
          <Iconify icon="eva:arrow-ios-forward-fill" className={navSectionClasses.item.arrow} />
        )}
      </StyledNavItem>
    );
  }
);

// ----------------------------------------------------------------------

const StyledNavItem = styled(ButtonBase, {
  shouldForwardProp: (prop) => prop !== 'active' && prop !== 'open' && prop !== 'disabled',
})<NavItemStateProps>(({ active, open, disabled, theme }) => ({
  padding: 'var(--nav-item-padding)',
  minHeight: 'var(--nav-item-height)',
  borderRadius: 'var(--nav-item-radius)',
  transition: theme.transitions.create(['background-color'], {
    duration: theme.transitions.duration.standard,
  }),
  '&:hover': {
    backgroundColor: 'var(--nav-item-hover-bg)',
  },
  [`& .${navSectionClasses.item.title}`]: {
    ...theme.typography.body2,
    flex: '1 1 auto',
    fontWeight: active ? theme.typography.fontWeightSemiBold : theme.typography.fontWeightMedium,
  },
  [`& .${navSectionClasses.item.icon}`]: {
    ...sharedStyles.icon,
    width: 'var(--nav-icon-size)',
    height: 'var(--nav-icon-size)',
    margin: 'var(--nav-icon-margin)',
  },
  [`& .${navSectionClasses.item.arrow}`]: { ...sharedStyles.arrow },
  [`& .${navSectionClasses.item.info}`]: { ...sharedStyles.info },
  // State
  ...(active && {
    color: 'var(--nav-item-active-color)',
    backgroundColor: 'var(--nav-item-active-bg)',
    '&:hover': {
      backgroundColor: 'var(--nav-item-active-hover-bg)',
    },
  }),
  ...(open && {
    color: 'var(--nav-item-open-color)',
    backgroundColor: 'var(--nav-item-open-bg)',
  }),
  ...(disabled && sharedStyles.disabled),
}));
