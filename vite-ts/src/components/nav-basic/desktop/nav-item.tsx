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
      caption,
      //
      open,
      depth,
      render,
      active,
      disabled,
      hasChild,
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
      depth,
      render,
      hasChild,
      externalLink,
      enabledRootRedirect,
    });

    return (
      <StyledNavItem
        ref={ref}
        aria-label={title}
        depth={depth}
        active={active}
        disabled={disabled}
        open={open && !active}
        disableRipple={navItem.rootItem}
        sx={{
          ...slotProps?.sx,
          [`& .${navSectionClasses.item.icon}`]: slotProps?.icon,
          [`& .${navSectionClasses.item.texts}`]: slotProps?.texts,
          [`& .${navSectionClasses.item.title}`]: slotProps?.title,
          [`& .${navSectionClasses.item.caption}`]: slotProps?.caption,
          [`& .${navSectionClasses.item.arrow}`]: slotProps?.arrow,
        }}
        className={stateClasses({ open: open && !active, active, disabled })}
        {...navItem.baseProps}
        {...other}
      >
        {icon && (
          <Box component="span" className={navSectionClasses.item.icon}>
            {navItem.renderIcon}
          </Box>
        )}

        {title && (
          <Box component="span" className={navSectionClasses.item.texts}>
            <Box component="span" className={navSectionClasses.item.title}>
              {title}
            </Box>
            {caption && navItem.subItem && (
              <Box component="span" className={navSectionClasses.item.caption}>
                {caption}
              </Box>
            )}
          </Box>
        )}

        {info && (
          <Box component="span" className={navSectionClasses.item.info}>
            {navItem.renderInfo}
          </Box>
        )}

        {hasChild && (
          <Iconify
            width={16}
            icon={navItem.subItem ? 'eva:arrow-ios-forward-fill' : 'eva:arrow-ios-downward-fill'}
            className={navSectionClasses.item.arrow}
          />
        )}
      </StyledNavItem>
    );
  }
);

// ----------------------------------------------------------------------

const StyledNavItem = styled(ButtonBase, {
  shouldForwardProp: (prop) =>
    prop !== 'active' && prop !== 'open' && prop !== 'disabled' && prop !== 'depth',
})<NavItemStateProps>(({ active, open, disabled, depth, theme }) => {
  const rootItem = depth === 1;

  const subItem = depth !== 1;

  const baseStyles = {
    item: {},
    icon: {
      ...sharedStyles.icon,
      width: 'var(--nav-icon-size)',
      height: 'var(--nav-icon-size)',
      margin: 'var(--nav-icon-margin)',
    },
    texts: {
      display: 'flex',
      flex: '1 1 auto',
      flexDirection: 'column',
    },
    title: {
      ...theme.typography.body2,
      fontWeight: active ? theme.typography.fontWeightSemiBold : theme.typography.fontWeightMedium,
    },
    caption: {
      ...theme.typography.caption,
      color: 'var(--nav-item-caption-color)',
    },
    arrow: {
      ...sharedStyles.arrow,
    },
    info: {
      ...sharedStyles.info,
    },
  } as const;

  return {
    /**
     * Root item
     */
    ...(rootItem && {
      ...baseStyles.item,
      padding: 'var(--nav-item-root-padding)',
      borderRadius: 'var(--nav-item-radius)',
      transition: theme.transitions.create(['all'], {
        duration: theme.transitions.duration.shorter,
      }),
      '&:hover': { opacity: 0.64 },
      [`& .${navSectionClasses.item.icon}`]: { ...baseStyles.icon },
      [`& .${navSectionClasses.item.texts}`]: { ...baseStyles.texts },
      [`& .${navSectionClasses.item.title}`]: { ...baseStyles.title },
      [`& .${navSectionClasses.item.arrow}`]: { ...baseStyles.arrow },
      [`& .${navSectionClasses.item.info}`]: { ...baseStyles.info },
      // State
      ...(active && {
        color: 'var(--nav-item-root-active-color)',
      }),
      ...(open && {
        opacity: 0.64,
      }),
    }),

    /**
     * Sub item
     */
    ...(subItem && {
      ...baseStyles.item,
      fontSize: theme.typography.pxToRem(13),
      borderRadius: 'var(--nav-item-sub-radius)',
      padding: 'var(--nav-item-sub-padding)',
      '&:hover': {
        color: 'var(--nav-item-sub-hover-color)',
        backgroundColor: 'var(--nav-item-sub-hover-bg)',
      },
      color: 'var(--nav-item-sub-color)',
      [`& .${navSectionClasses.item.icon}`]: { ...baseStyles.icon },
      [`& .${navSectionClasses.item.texts}`]: { ...baseStyles.texts },
      [`& .${navSectionClasses.item.title}`]: { ...baseStyles.title },
      [`& .${navSectionClasses.item.caption}`]: { ...baseStyles.caption },
      [`& .${navSectionClasses.item.arrow}`]: {
        ...baseStyles.arrow,
        marginRight: theme.spacing(-0.5),
      },
      [`& .${navSectionClasses.item.info}`]: { ...baseStyles.info },
      // State
      ...(active && {
        color: 'var(--nav-item-sub-active-color)',
        backgroundColor: 'var(--nav-item-sub-active-bg)',
      }),
      ...(open && {
        color: 'var(--nav-item-sub-open-color)',
        backgroundColor: 'var(--nav-item-sub-open-bg)',
      }),
    }),

    /**
     * Disabled
     */
    ...(disabled && sharedStyles.disabled),
  };
});
