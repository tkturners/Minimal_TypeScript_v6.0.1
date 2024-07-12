import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';

import { NavList } from './nav-list';
import { NavUl } from '../../nav-section';
import { navBasicClasses } from '../classes';
import { navBasicCssVars } from '../css-vars';

import type { NavBasicProps } from '../types';

// ----------------------------------------------------------------------

export function NavBasicMobile({
  sx,
  data,
  render,
  slotProps,
  enabledRootRedirect,
  cssVars: overridesVars,
  ...other
}: NavBasicProps) {
  const theme = useTheme();

  const cssVars = {
    ...navBasicCssVars.mobile(theme),
    ...overridesVars,
  };

  return (
    <Stack
      component="nav"
      className={navBasicClasses.mobile.root}
      sx={{ ...cssVars, ...sx }}
      {...other}
    >
      <NavUl sx={{ flex: '1 1 auto', gap: 'var(--nav-item-gap)' }}>
        {data.map((list) => (
          <NavList
            key={list.title}
            depth={1}
            data={list}
            render={render}
            slotProps={slotProps}
            enabledRootRedirect={enabledRootRedirect}
          />
        ))}
      </NavUl>
    </Stack>
  );
}
