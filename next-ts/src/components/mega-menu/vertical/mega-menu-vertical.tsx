import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';

import { NavList } from './nav-list';
import { NavUl } from '../../nav-section';
import { megaMenuClasses } from '../classes';
import { megaMenuCssVars } from '../css-vars';

import type { MegaMenuProps } from '../types';

// ----------------------------------------------------------------------

export function MegaMenuVertical({
  sx,
  data,
  render,
  slotProps,
  enabledRootRedirect,
  cssVars: overridesVars,
  ...other
}: MegaMenuProps) {
  const theme = useTheme();

  const cssVars = {
    ...megaMenuCssVars.vertical(theme),
    ...overridesVars,
  };

  return (
    <Stack
      component="nav"
      className={megaMenuClasses.vertical.root}
      sx={{ ...cssVars, flex: '1 1 auto', ...sx }}
      {...other}
    >
      <NavUl sx={{ gap: 'var(--nav-item-gap)' }}>
        {data.map((list) => (
          <NavList
            key={list.title}
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
