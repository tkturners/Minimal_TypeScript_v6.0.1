'use client';

import { paths } from 'src/routes/paths';

import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { ComponentHero } from '../../component-hero';
import { SortableContainer } from './sortable-container';
import { ScrollToViewTemplate } from '../../component-template';

// ----------------------------------------------------------------------

export function DndView() {
  const DEMO = [
    { name: 'Grid', component: <SortableContainer swap /> },
    { name: 'Vertical', component: <SortableContainer layout="vertical" itemCount={4} /> },
    { name: 'Horizontal', component: <SortableContainer layout="horizontal" itemCount={3} /> },
  ];

  return (
    <>
      <ComponentHero>
        <CustomBreadcrumbs
          heading="Dnd"
          links={[{ name: 'Components', href: paths.components }, { name: 'Dnd' }]}
          moreLink={['https://docs.dndkit.com/']}
        />
      </ComponentHero>

      <ScrollToViewTemplate data={DEMO} />
    </>
  );
}
