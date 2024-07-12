import { useRef, useState, useEffect, useCallback } from 'react';

import Paper from '@mui/material/Paper';
import Popover from '@mui/material/Popover';
import { useTheme } from '@mui/material/styles';

import { isExternalLink } from 'src/routes/utils';
import { usePathname, useActiveLink } from 'src/routes/hooks';

import { paper, hideScrollY } from 'src/theme/styles';

import { NavItem } from './nav-item';
import { NavLi } from '../../nav-section';
import { megaMenuClasses } from '../classes';
import { NavContent } from '../components/nav-content';

import type { NavListProps } from '../types';

// ----------------------------------------------------------------------

export function NavList({ data, render, slotProps, cssVars, enabledRootRedirect }: NavListProps) {
  const theme = useTheme();

  const pathname = usePathname();

  const [openMenu, setOpenMenu] = useState(false);

  const navItemRef = useRef<HTMLButtonElement | null>(null);

  const active = useActiveLink(data.path, !!data.children);

  const [clientRect, setClientRect] = useState<Record<string, number>>({
    x: 0,
    top: 0,
    width: 0,
    height: 0,
  });

  const singleList = data.children?.length === 1;

  const multiList = !singleList;

  useEffect(() => {
    if (openMenu) {
      handleCloseMenu();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleGetClientRect = useCallback(() => {
    const element = document.getElementsByClassName(megaMenuClasses.vertical.root);

    if (element) {
      const rect = element[0].getBoundingClientRect();
      setClientRect({
        top: rect.top,
        width: rect.width,
        height: rect.height,
        x: rect.x,
      });
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
          keepMounted={multiList}
          open={openMenu}
          anchorEl={navItemRef.current}
          anchorReference="anchorPosition"
          anchorPosition={{ top: clientRect.top - 20, left: clientRect.x + clientRect.width }}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
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
              ...(singleList && { ...hideScrollY, minWidth: 280, height: clientRect.height }),
              ...(multiList && {
                minWidth: 720,
                maxWidth: 960,
                minHeight: clientRect.height,
                width: `calc(100vw - ${clientRect.x * 2 + clientRect.width}px)`,
              }),
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
