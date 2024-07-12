'use client';

import { paths } from 'src/routes/paths';

import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { BasicTable } from './basic';
import { CollapsibleTable } from './collapsible';
import { ComponentHero } from '../../component-hero';
import { ComponentBlock } from '../../component-block';
import { SortingSelectingTable } from './sorting-selecting';
import { ScrollToViewTemplate } from '../../component-template';
import { GroupingFixedHeaderTable } from './grouping-fixed-header';

// ----------------------------------------------------------------------

const blockProps = {
  p: 0,
  overflow: 'hidden',
  alignItems: 'unset',
  flexDirection: 'column',
  bgcolor: 'background.paper',
};

const DEMO = [
  {
    name: 'Basic Table',
    component: (
      <ComponentBlock sx={blockProps}>
        <BasicTable />
      </ComponentBlock>
    ),
  },
  {
    name: 'Sorting & selecting',
    component: (
      <ComponentBlock sx={blockProps}>
        <SortingSelectingTable />
      </ComponentBlock>
    ),
  },
  {
    name: 'Grouping & fixed header',
    component: (
      <ComponentBlock sx={blockProps}>
        <GroupingFixedHeaderTable />
      </ComponentBlock>
    ),
  },
  {
    name: 'Collapsible table',
    component: (
      <ComponentBlock sx={blockProps}>
        <CollapsibleTable />
      </ComponentBlock>
    ),
  },
];

export function TableView() {
  return (
    <>
      <ComponentHero>
        <CustomBreadcrumbs
          heading="Table"
          links={[{ name: 'Components', href: paths.components }, { name: 'Table' }]}
          moreLink={['https://mui.com/components/tables']}
        />
      </ComponentHero>

      <ScrollToViewTemplate data={DEMO} />
    </>
  );
}
