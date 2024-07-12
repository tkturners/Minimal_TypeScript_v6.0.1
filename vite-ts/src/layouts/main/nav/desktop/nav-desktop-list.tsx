import { useRef, useState, useEffect, useCallback } from 'react';

import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Stack from '@mui/material/Stack';
import Portal from '@mui/material/Portal';
import { useTheme } from '@mui/material/styles';
import ListSubheader from '@mui/material/ListSubheader';

import { usePathname } from 'src/routes/hooks';
import { useActiveLink } from 'src/routes/hooks/use-active-link';
import { isExternalLink, removeLastSlash } from 'src/routes/utils';

import { paper } from 'src/theme/styles';

import { NavLi, NavUl } from 'src/components/nav-section';

import { NavItem, NavItemDashboard } from './nav-desktop-item';

import type { NavListProps, NavSubListProps } from '../types';

// ----------------------------------------------------------------------

export function NavList({ data }: NavListProps) {
  const theme = useTheme();

  const navItemRef = useRef<HTMLButtonElement | null>(null);

  const pathname = usePathname();

  const [openMenu, setOpenMenu] = useState(false);

  const active = useActiveLink(data.path, !!data.children);

  const [clientRect, setClientRect] = useState<Record<string, number>>({ top: 0, height: 0 });

  useEffect(() => {
    if (openMenu) {
      handleCloseMenu();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

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
      // slots
      title={data.title}
      path={data.path}
      // state
      active={active}
      hasChild={!!data.children}
      open={data.children && !!openMenu}
      externalLink={isExternalLink(data.path)}
      // action
      onMouseEnter={handleOpenMenu}
      onMouseLeave={handleCloseMenu}
    />
  );

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

  if (data.children) {
    return (
      <NavLi sx={{ height: 1 }}>
        {renderNavItem}

        {openMenu && (
          <Portal>
            <Fade in>
              <Box
                onMouseEnter={handleOpenMenu}
                onMouseLeave={handleCloseMenu}
                sx={{
                  pt: 0.5,
                  left: 0,
                  right: 0,
                  mx: 'auto',
                  position: 'fixed',
                  zIndex: theme.zIndex.modal,
                  maxWidth: theme.breakpoints.values.lg,
                  top: Math.round(clientRect.top + clientRect.height),
                }}
              >
                <Box
                  component="nav"
                  sx={{
                    ...paper({ theme, dropdown: true }),
                    borderRadius: 2,
                    p: theme.spacing(5, 1, 1, 4),
                  }}
                >
                  <NavUl sx={{ gap: 3, width: 1, flexWrap: 'wrap', flexDirection: 'row' }}>
                    {data.children.map((list) => (
                      <NavSubList
                        key={list.subheader}
                        subheader={list.subheader}
                        data={list.items}
                      />
                    ))}
                  </NavUl>
                </Box>
              </Box>
            </Fade>
          </Portal>
        )}
      </NavLi>
    );
  }

  return <NavLi sx={{ height: 1 }}>{renderNavItem}</NavLi>;
}

// ----------------------------------------------------------------------

function NavSubList({ data, subheader, sx, ...other }: NavSubListProps) {
  const pathname = usePathname();

  const isDashboard = subheader === 'Dashboard';

  return (
    <Stack
      component={NavLi}
      alignItems="flex-start"
      sx={{
        flex: '1 1 auto',
        ...(isDashboard && { maxWidth: { md: 1 / 3, lg: 540 } }),
        ...sx,
      }}
      {...other}
    >
      <NavUl>
        <ListSubheader
          disableSticky
          disableGutters
          sx={{ fontSize: 11, color: 'text.primary', typography: 'overline' }}
        >
          {subheader}
        </ListSubheader>

        {data.map((item) =>
          isDashboard ? (
            <NavLi key={item.title} sx={{ mt: 1.5 }}>
              <NavItemDashboard path={item.path} />
            </NavLi>
          ) : (
            <NavLi key={item.title} sx={{ mt: 1.5 }}>
              <NavItem
                subItem
                title={item.title}
                path={item.path}
                active={item.path === removeLastSlash(pathname)}
              />
            </NavLi>
          )
        )}
      </NavUl>
    </Stack>
  );
}
