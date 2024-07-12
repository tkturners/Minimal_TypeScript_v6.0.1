'use client';

import { Fragment } from 'react';

import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Paper from '@mui/material/Paper';

import { paths } from 'src/routes/paths';

import { useTabs } from 'src/hooks/use-tabs';

import { Iconify } from 'src/components/iconify';
import { CustomTabs } from 'src/components/custom-tabs';
import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { ComponentHero } from '../../component-hero';
import { ComponentBlock } from '../../component-block';
import { ScrollToViewTemplate } from '../../component-template';

// ----------------------------------------------------------------------

const TABS = [
  { value: 'one', icon: <Iconify icon="solar:phone-bold" width={24} />, label: 'Item one' },
  { value: 'two', icon: <Iconify icon="solar:heart-bold" width={24} />, label: 'Item two' },
  {
    value: 'three',
    icon: <Iconify icon="eva:headphones-fill" width={24} />,
    label: 'Item three',
    disabled: true,
  },
  { value: 'four', icon: <Iconify icon="eva:headphones-fill" width={24} />, label: 'Item four' },
  {
    value: 'five',
    icon: <Iconify icon="eva:headphones-fill" width={24} />,
    label: 'Item five',
    disabled: true,
  },
  { value: 'six', icon: <Iconify icon="eva:headphones-fill" width={24} />, label: 'Item six' },
  { value: 'seven', icon: <Iconify icon="eva:headphones-fill" width={24} />, label: 'Item seven' },
];

// ----------------------------------------------------------------------

export function TabsView() {
  const basicTabs = useTabs('one');

  const customTabs = useTabs('one');

  const scrollableTabs = useTabs('one');

  const DEMO = [
    {
      name: 'Text',
      component: (
        <ComponentBlock sx={{ flexDirection: 'column', alignItems: 'unset' }}>
          <Tabs value={basicTabs.value} onChange={basicTabs.onChange}>
            {TABS.slice(0, 3).map((tab) => (
              <Tab key={tab.value} value={tab.value} label={tab.label} />
            ))}
          </Tabs>

          <Paper variant="outlined" sx={{ p: 2.5, typography: 'body2', borderRadius: 1.5 }}>
            {TABS.slice(0, 3).map((tab) =>
              tab.value === basicTabs.value ? (
                <Fragment key={tab.value}>{tab.label}</Fragment>
              ) : null
            )}
          </Paper>
        </ComponentBlock>
      ),
    },
    {
      name: 'Icon',
      component: (
        <ComponentBlock>
          <Tabs value={basicTabs.value} onChange={basicTabs.onChange}>
            {TABS.slice(0, 3).map((tab) => (
              <Tab key={tab.value} icon={tab.icon} value={tab.value} />
            ))}
          </Tabs>
        </ComponentBlock>
      ),
    },
    {
      name: 'Top',
      component: (
        <ComponentBlock>
          <Tabs value={basicTabs.value} onChange={basicTabs.onChange}>
            {TABS.slice(0, 3).map((tab) => (
              <Tab
                iconPosition="top"
                key={tab.value}
                icon={tab.icon}
                label={tab.label}
                value={tab.value}
                disabled={tab.disabled}
              />
            ))}
          </Tabs>
        </ComponentBlock>
      ),
    },
    {
      name: 'Bottom',
      component: (
        <ComponentBlock>
          <Tabs value={basicTabs.value} onChange={basicTabs.onChange}>
            {TABS.slice(0, 3).map((tab) => (
              <Tab
                iconPosition="bottom"
                key={tab.value}
                icon={tab.icon}
                label={tab.label}
                value={tab.value}
                disabled={tab.disabled}
              />
            ))}
          </Tabs>
        </ComponentBlock>
      ),
    },
    {
      name: 'Start',
      component: (
        <ComponentBlock>
          <Tabs value={basicTabs.value} onChange={basicTabs.onChange}>
            {TABS.slice(0, 3).map((tab) => (
              <Tab
                key={tab.value}
                icon={tab.icon}
                label={tab.label}
                value={tab.value}
                disabled={tab.disabled}
              />
            ))}
          </Tabs>
        </ComponentBlock>
      ),
    },
    {
      name: 'End',
      component: (
        <ComponentBlock>
          <Tabs value={basicTabs.value} onChange={basicTabs.onChange}>
            {TABS.slice(0, 3).map((tab) => (
              <Tab
                iconPosition="end"
                key={tab.value}
                icon={tab.icon}
                label={tab.label}
                value={tab.value}
                disabled={tab.disabled}
              />
            ))}
          </Tabs>
        </ComponentBlock>
      ),
    },
    {
      name: 'Scrollable',
      component: (
        <ComponentBlock>
          <Tabs
            value={scrollableTabs.value}
            onChange={scrollableTabs.onChange}
            sx={{ maxWidth: 320 }}
          >
            {TABS.map((tab) => (
              <Tab key={tab.value} label={tab.label} value={tab.value} />
            ))}
          </Tabs>
        </ComponentBlock>
      ),
    },
    {
      name: 'Custom',
      component: (
        <ComponentBlock sx={{ flexDirection: 'column', alignItems: 'unset' }}>
          <CustomTabs
            value={customTabs.value}
            onChange={customTabs.onChange}
            variant="scrollable"
            sx={{ mx: 'auto', maxWidth: 320, borderRadius: 1 }}
          >
            {TABS.map((tab) => (
              <Tab key={tab.value} value={tab.value} label={tab.label} />
            ))}
          </CustomTabs>

          <Paper variant="outlined" sx={{ p: 2.5, typography: 'body2', borderRadius: 1.5 }}>
            {TABS.map((tab) =>
              tab.value === basicTabs.value ? (
                <Fragment key={tab.value}>{tab.label}</Fragment>
              ) : null
            )}
          </Paper>
        </ComponentBlock>
      ),
    },
  ];

  return (
    <>
      <ComponentHero>
        <CustomBreadcrumbs
          heading="Tabs"
          links={[{ name: 'Components', href: paths.components }, { name: 'Tabs' }]}
          moreLink={['https://mui.com/components/tabs']}
        />
      </ComponentHero>

      <ScrollToViewTemplate data={DEMO} />
    </>
  );
}
