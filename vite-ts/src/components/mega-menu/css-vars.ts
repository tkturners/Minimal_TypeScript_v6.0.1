import type { Theme } from '@mui/material/styles';

import { varAlpha } from 'src/theme/styles';

// ----------------------------------------------------------------------

function verticalVars(theme: Theme) {
  const {
    spacing,
    vars: { palette },
  } = theme;

  return {
    '--nav-item-gap': theme.spacing(0.5),
    '--nav-item-radius': '0',
    '--nav-item-height': '40px',
    '--nav-item-padding': spacing(1, 1.5, 1, 2.5),
    // hover
    '--nav-item-hover-bg': palette.action.hover,
    // active
    '--nav-item-active-color': palette.primary.main,
    '--nav-item-active-bg': varAlpha(palette.primary.mainChannel, 0.08),
    '--nav-item-active-hover-bg': varAlpha(palette.primary.mainChannel, 0.16),
    // open
    '--nav-item-open-color': palette.text.primary,
    '--nav-item-open-bg': palette.action.hover,
    // icon
    '--nav-icon-size': '22px',
    '--nav-icon-margin': spacing(0, 2, 0, 0),
  };
}

// ----------------------------------------------------------------------

function horizontalVars(theme: Theme) {
  const {
    shape,
    spacing,
    vars: { palette },
  } = theme;

  return {
    '--nav-item-gap': theme.spacing(2.5),
    '--nav-item-radius': `${shape.borderRadius}px`,
    '--nav-item-height': '32px',
    '--nav-item-padding': spacing(0.5, 1),
    // hover
    '--nav-item-hover-bg': palette.action.hover,
    // active
    '--nav-item-active-color': palette.primary.main,
    // open
    '--nav-item-open-bg': palette.action.hover,
    // icon
    '--nav-icon-size': '22px',
    '--nav-icon-margin': spacing(0, 1, 0, 0),
  };
}

// ----------------------------------------------------------------------

function mobileVars(theme: Theme) {
  const {
    spacing,
    vars: { palette },
  } = theme;

  return {
    '--nav-width': '280px',
    '--nav-item-gap': theme.spacing(0.5),
    '--nav-item-radius': '0',
    '--nav-item-height': '40px',
    '--nav-item-padding': spacing(1, 1.5, 1, 2.5),
    // hover
    '--nav-item-hover-color': palette.action.hover,
    // active
    '--nav-item-active-color': palette.primary.main,
    '--nav-item-active-bg': varAlpha(palette.primary.mainChannel, 0.08),
    '--nav-item-active-hover-bg': varAlpha(palette.primary.mainChannel, 0.16),
    // open
    '--nav-item-open-color': palette.text.primary,
    '--nav-item-open-bg': palette.action.hover,
    // icon
    '--nav-icon-size': '22px',
    '--nav-icon-margin': spacing(0, 2, 0, 0),
  };
}

// ----------------------------------------------------------------------

export const megaMenuCssVars = {
  vertical: verticalVars,
  horizontal: horizontalVars,
  mobile: mobileVars,
};
