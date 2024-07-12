import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';

import { NavList } from './nav-list';
import { NavUl } from '../../nav-section';
import { navBasicClasses } from '../classes';
import { navBasicCssVars } from '../css-vars';

import type { NavBasicProps } from '../types';

// ----------------------------------------------------------------------

export function NavBasicDesktop({
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
    ...navBasicCssVars.desktop(theme),
    ...overridesVars,
  };

  return (
    <Stack
      component="nav"
      spacing={5}
      direction="row"
      className={navBasicClasses.desktop.root}
      sx={{ ...cssVars, ...sx }}
      {...other}
    >
      <NavUl sx={{ flexDirection: 'row', gap: 'var(--nav-item-gap)' }}>
        {data.map((list) => (
          <NavList
            key={list.title}
            depth={1}
            data={list}
            render={render}
            cssVars={cssVars}
            slotProps={slotProps}
            enabledRootRedirect={enabledRootRedirect}
          />
        ))}
      </NavUl>
    </Stack>
  );
}
