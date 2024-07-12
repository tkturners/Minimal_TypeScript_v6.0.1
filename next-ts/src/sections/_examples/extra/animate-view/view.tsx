'use client';

import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';

import { paths } from 'src/routes/paths';

import { useTabs } from 'src/hooks/use-tabs';

import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { AnimateOther } from './other';
import { AnimateScroll } from './scroll';
import { AnimateDialog } from './dialog';
import { AnimateInview } from './inview';
import { AnimateBackground } from './background';
import { ComponentHero } from '../../component-hero';
import { ComponentContainer } from '../../component-block';

// ----------------------------------------------------------------------

const TABS = [
  { value: 'inview', label: 'In View', component: <AnimateInview /> },
  { value: 'scroll', label: 'Scroll', component: <AnimateScroll /> },
  { value: 'dialog', label: 'Dialog', component: <AnimateDialog /> },
  { value: 'background', label: 'Background', component: <AnimateBackground /> },
  { value: 'other', label: 'Other', component: <AnimateOther /> },
];

// ----------------------------------------------------------------------

export function AnimateView() {
  const tabs = useTabs('inview');

  return (
    <>
      <ComponentHero>
        <CustomBreadcrumbs
          heading="Animate"
          links={[{ name: 'Components', href: paths.components }, { name: 'Animate' }]}
          moreLink={['https://www.framer.com/api/motion']}
        />
      </ComponentHero>

      <ComponentContainer>
        <Tabs value={tabs.value} onChange={tabs.onChange}>
          {TABS.map((tab) => (
            <Tab key={tab.value} value={tab.value} label={tab.label} />
          ))}
        </Tabs>

        {TABS.map((tab) => tab.value === tabs.value && <Box key={tab.value}>{tab.component}</Box>)}
      </ComponentContainer>
    </>
  );
}
