import { forwardRef } from 'react';

import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';

import { stylesMode } from 'src/theme/styles';

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

            {caption && (
              <Tooltip title={caption} placement="top-start">
                <Box component="span" className={navSectionClasses.item.caption}>
                  {caption}
                </Box>
              </Tooltip>
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
            icon={open ? 'eva:arrow-ios-downward-fill' : 'eva:arrow-ios-forward-fill'}
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

  const subItem = !rootItem;

  const baseStyles = {
    item: {
      width: '100%',
      color: 'var(--nav-item-color)',
      borderRadius: 'var(--nav-item-radius)',
      paddingTop: 'var(--nav-item-pt)',
      paddingLeft: 'var(--nav-item-pl)',
      paddingRight: 'var(--nav-item-pr)',
      paddingBottom: 'var(--nav-item-pb)',
      '&:hover': {
        backgroundColor: 'var(--nav-item-hover-color)',
      },
    },
    icon: {
      ...sharedStyles.icon,
      width: 'var(--nav-icon-size)',
      height: 'var(--nav-icon-size)',
      margin: 'var(--nav-icon-margin)',
    },
    texts: {
      minWidth: 0,
      flex: '1 1 auto',
    },
    title: {
      ...sharedStyles.noWrap,
      ...theme.typography.body2,
      fontWeight: active ? theme.typography.fontWeightSemiBold : theme.typography.fontWeightMedium,
    },
    caption: {
      ...sharedStyles.noWrap,
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
      minHeight: 'var(--nav-item-root-height)',
      [`& .${navSectionClasses.item.icon}`]: { ...baseStyles.icon },
      [`& .${navSectionClasses.item.texts}`]: { ...baseStyles.texts },
      [`& .${navSectionClasses.item.title}`]: { ...baseStyles.title },
      [`& .${navSectionClasses.item.caption}`]: { ...baseStyles.caption },
      [`& .${navSectionClasses.item.arrow}`]: { ...baseStyles.arrow },
      [`& .${navSectionClasses.item.info}`]: { ...baseStyles.info },
      // State
      ...(active && {
        color: 'var(--nav-item-root-active-color)',
        backgroundColor: 'var(--nav-item-root-active-bg)',
        '&:hover': {
          backgroundColor: 'var(--nav-item-root-active-hover-bg)',
        },
        [stylesMode.dark]: {
          color: 'var(--nav-item-root-active-color-on-dark)',
        },
      }),
      ...(open && {
        color: 'var(--nav-item-root-open-color)',
        backgroundColor: 'var(--nav-item-root-open-bg)',
      }),
    }),

    /**
     * Sub item
     */
    ...(subItem && {
      ...baseStyles.item,
      minHeight: 'var(--nav-item-sub-height)',
      [`& .${navSectionClasses.item.icon}`]: { ...baseStyles.icon },
      [`& .${navSectionClasses.item.texts}`]: { ...baseStyles.texts },
      [`& .${navSectionClasses.item.title}`]: { ...baseStyles.title },
      [`& .${navSectionClasses.item.caption}`]: { ...baseStyles.caption },
      [`& .${navSectionClasses.item.arrow}`]: { ...baseStyles.arrow },
      [`& .${navSectionClasses.item.info}`]: { ...baseStyles.info },
      // Shape
      '&::before': {
        width: 3,
        left: -13,
        height: 16,
        content: '""',
        borderRadius: 3,
        position: 'absolute',
        transform: 'scale(0)',
        transition: theme.transitions.create(['transform'], {
          duration: theme.transitions.duration.short,
        }),
        ...(active && {
          transform: 'scale(1)',
          backgroundColor: 'currentColor',
        }),
      },
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
