import { useState, useEffect, useCallback } from 'react';

import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { isExternalLink } from 'src/routes/utils';
import { usePathname, useActiveLink } from 'src/routes/hooks';

import { Scrollbar } from 'src/components/scrollbar';

import { NavItem } from './nav-item';
import { Iconify } from '../../iconify';
import { NavUl, NavLi } from '../../nav-section';
import { NavSubList } from '../components/nav-sub-list';

import type { NavListProps } from '../types';

// ----------------------------------------------------------------------

export function NavList({ data, render, cssVars, slotProps }: NavListProps) {
  const pathname = usePathname();

  const active = useActiveLink(data.path, !!data.children);

  const [openMenu, setOpenMenu] = useState(false);

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
      // styles
      slotProps={slotProps?.rootItem}
      // actions
      onClick={handleOpenMenu}
    />
  );

  if (data.children) {
    return (
      <NavLi disabled={data.disabled}>
        {renderNavItem}

        <Drawer
          open={openMenu}
          onClose={handleCloseMenu}
          slotProps={{ backdrop: { invisible: true } }}
          PaperProps={{
            sx: {
              display: 'flex',
              flexDirection: 'column',
              width: 'calc(var(--nav-width) - 8px)',
            },
          }}
          sx={{ ...cssVars }}
        >
          <Stack direction="row" alignItems="center" spacing={1} sx={{ px: 1, py: 1.5 }}>
            <IconButton onClick={handleCloseMenu}>
              <Iconify icon="eva:arrow-ios-back-fill" width={16} />
            </IconButton>

            <Typography noWrap variant="subtitle1" sx={{ textTransform: 'capitalize' }}>
              {data.title}
            </Typography>
          </Stack>

          <Divider />

          <Scrollbar fillContent sx={{ p: 2 }}>
            <Stack component="nav" spacing={4}>
              <NavUl sx={{ gap: 3 }}>
                <NavSubList data={data.children} slotProps={slotProps} />
              </NavUl>
            </Stack>
          </Scrollbar>
        </Drawer>
      </NavLi>
    );
  }

  return <NavLi disabled={data.disabled}>{renderNavItem}</NavLi>;
}
