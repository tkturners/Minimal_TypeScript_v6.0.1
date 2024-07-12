import { useRef, useState, useEffect, useCallback } from 'react';

import Paper from '@mui/material/Paper';
import Popover from '@mui/material/Popover';
import { useTheme } from '@mui/material/styles';

import { isExternalLink } from 'src/routes/utils';
import { usePathname, useActiveLink } from 'src/routes/hooks';

import { paper } from 'src/theme/styles';

import { NavItem } from './nav-item';
import { NavLi } from '../../nav-section';
import { NavContent } from '../components/nav-content';

import type { NavListProps } from '../types';

// ----------------------------------------------------------------------

export function NavList({ data, render, slotProps, enabledRootRedirect, cssVars }: NavListProps) {
  const theme = useTheme();

  const pathname = usePathname();

  const [openMenu, setOpenMenu] = useState(false);

  const navItemRef = useRef<HTMLButtonElement | null>(null);

  const active = useActiveLink(data.path, !!data.children);

  const [clientRect, setClientRect] = useState<Record<string, number>>({ top: 0, height: 0 });

  const singleList = data.children?.length === 1;

  const multiList = !singleList;

  useEffect(() => {
    if (openMenu) {
      handleCloseMenu();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleGetClientRect = useCallback(() => {
    const element = navItemRef.current;

    if (element) {
      const rect = element.getBoundingClientRect();
      setClientRect({ top: rect.top, height: rect.height });
    }
  }, []);

  useEffect(() => {
    handleGetClientRect();

    window.addEventListener('scroll', handleGetClientRect);

    return () => {
      window.removeEventListener('scroll', handleGetClientRect);
    };
  }, [handleGetClientRect]);

  const handleOpenMenu = useCallback(() => {
    if (data.children) {
      setOpenMenu(true);
    }
  }, [data.children]);

  const handleCloseMenu = useCallback(() => {
    setOpenMenu(false);
  }, []);

  const renderNavItem = (
    <NavItem
      ref={navItemRef}
      render={render}
      // slots
      path={data.path}
      icon={data.icon}
      info={data.info}
      title={data.title}
      // state
      active={active}
      disabled={data.disabled}
      hasChild={!!data.children}
      open={data.children && !!openMenu}
      externalLink={isExternalLink(data.path)}
      enabledRootRedirect={enabledRootRedirect}
      // styles
      slotProps={slotProps?.rootItem}
      // actions
      onMouseEnter={handleOpenMenu}
      onMouseLeave={handleCloseMenu}
    />
  );

  if (data.children) {
    return (
      <NavLi disabled={data.disabled}>
        {renderNavItem}

        <Popover
          disableScrollLock
          open={openMenu}
          anchorEl={navItemRef.current}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
          slotProps={{
            paper: {
              onMouseEnter: handleOpenMenu,
              onMouseLeave: handleCloseMenu,
              sx: {
                /* Reset */
                boxShadow: 'none',
                overflow: 'unset',
                backdropFilter: 'none',
                background: 'transparent',
                /**/
                ...(multiList && {
                  right: 0,
                  mx: 'auto',
                  left: '0 !important',
                  top: `${clientRect.top + clientRect.height}px !important`,
                  maxWidth: {
                    xs: theme.breakpoints.values.lg,
                    xl: theme.breakpoints.values.xl,
                  },
                }),
                ...(openMenu && { pointerEvents: 'auto' }),
                ...slotProps?.paper,
              },
            },
          }}
          sx={{ ...cssVars, pointerEvents: 'none' }}
        >
          <Paper
            sx={{
              ...paper({ theme, dropdown: true }),
              p: 2.5,
              borderRadius: 2,
              ...(singleList && { minWidth: 240 }),
              ...(multiList && {}),
              ...slotProps?.paper,
            }}
          >
            <NavContent singleList={singleList} data={data} slotProps={slotProps} />
          </Paper>
        </Popover>
      </NavLi>
    );
  }

  return <NavLi disabled={data.disabled}>{renderNavItem}</NavLi>;
}
