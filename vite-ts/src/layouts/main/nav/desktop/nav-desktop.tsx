import Stack from '@mui/material/Stack';

import { NavUl } from 'src/components/nav-section';

import { NavList } from './nav-desktop-list';

import type { NavMainProps } from '../types';

// ----------------------------------------------------------------------

export function NavDesktop({ data, sx }: NavMainProps) {
  return (
    <Stack component="nav" sx={{ height: 1, ...sx }}>
      <NavUl
        sx={{
          gap: 5,
          height: 1,
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        {data.map((list) => (
          <NavList key={list.title} data={list} />
        ))}
      </NavUl>
    </Stack>
  );
}
