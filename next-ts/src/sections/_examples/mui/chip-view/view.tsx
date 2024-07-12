'use client';

import { paths } from 'src/routes/paths';

import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { Chips } from './chip';
import { ComponentHero } from '../../component-hero';
import { ScrollToViewTemplate } from '../../component-template';

// ----------------------------------------------------------------------

export function ChipView() {
  const DEMO = [
    { name: 'Filled', component: <Chips /> },
    { name: 'Outlined', component: <Chips variant="outlined" /> },
    { name: 'Soft', component: <Chips variant="soft" /> },
  ];

  return (
    <>
      <ComponentHero>
        <CustomBreadcrumbs
          heading="Chip"
          links={[{ name: 'Components', href: paths.components }, { name: 'Chip' }]}
          moreLink={['https://mui.com/components/chips']}
        />
      </ComponentHero>

      <ScrollToViewTemplate data={DEMO} />
    </>
  );
}
