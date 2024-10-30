import { paramCase } from 'src/utils/change-case';

import { CONFIG } from 'src/config-global';

// ----------------------------------------------------------------------

const getHref = (category: string, name: string) => `/components/${category}/${paramCase(name)}`;

export const foundationNav = ['Colors', 'Typography', 'Shadows', 'Grid', 'Icons'].map((name) => ({
  name,
  href: getHref('foundation', name),
  icon: `${CONFIG.assetsDir}/assets/icons/components/ic-${paramCase(name)}.svg`,
}));

export const muiNav = [
  'Chip',
  'List',
  'Menu',
  'Tabs',
  'Alert',
  'Badge',
  'Table',
  'Avatar',
  'Dialog',
  'Rating',
  'Slider',
  'Switch',
  'Buttons',
  'Pickers',
  'Popover',
  'Stepper',
  'Tooltip',
  'Checkbox',
  'Progress',
  'Timeline',
  'Accordion',
  'Textfield',
  'Data grid',
  'Tree view',
  'Pagination',
  'Breadcrumbs',
  'Autocomplete',
  'Radio button',
  'Transfer list',
].map((name) => ({
  name,
  href: getHref('mui', name),
  icon: `${CONFIG.assetsDir}/assets/icons/components/ic-${paramCase(name)}.svg`,
  category: (['Data grid', 'Pickers', 'Tree view'].includes(name) && 'MUI X') || '',
}));

export const extraNav = [
  'Map',
  'Dnd',
  'Chart',
  'Image',
  'Label',
  'Editor',
  'Upload',
  'Scroll',
  'Animate',
  'Carousel',
  'Lightbox',
  'Snackbar',
  'Markdown',
  'Walktour',
  'Mega menu',
  'Utilities',
  'Multi language',
  'Navigation bar',
  'Form validation',
  'Form wizard',
  'Scroll progress',
  'Organization chart',
].map((name) => ({
  name,
  href: getHref('extra', name),
  icon: `${CONFIG.assetsDir}/assets/icons/components/ic-extra-${paramCase(name)}.svg`,
  category:
    ([
      'Chart',
      'Map',
      'Editor',
      'Upload',
      'Carousel',
      'Multi language',
      'Animate',
      'Form validation',
      'Form wizard',
      'Lightbox',
      'Image',
      'Scroll',
      'Scroll progress',
      'Snackbar',
      'Organization chart',
      'Markdown',
      'Walktour',
    ].includes(name) &&
      '3rd Party') ||
    '',
}));
