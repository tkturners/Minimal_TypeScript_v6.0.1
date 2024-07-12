import type { ITourItem } from 'src/types/tour';

import { useState, useCallback } from 'react';

import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import { paths } from 'src/routes/paths';

import { useTabs } from 'src/hooks/use-tabs';

import { DashboardContent } from 'src/layouts/dashboard';
import { TOUR_DETAILS_TABS, TOUR_PUBLISH_OPTIONS } from 'src/_mock';

import { Label } from 'src/components/label';

import { TourDetailsContent } from '../tour-details-content';
import { TourDetailsBookers } from '../tour-details-bookers';
import { TourDetailsToolbar } from '../tour-details-toolbar';

// ----------------------------------------------------------------------

type Props = {
  tour?: ITourItem;
};

export function TourDetailsView({ tour }: Props) {
  const [publish, setPublish] = useState(tour?.publish);

  const tabs = useTabs('content');

  const handleChangePublish = useCallback((newValue: string) => {
    setPublish(newValue);
  }, []);

  const renderTabs = (
    <Tabs value={tabs.value} onChange={tabs.onChange} sx={{ mb: { xs: 3, md: 5 } }}>
      {TOUR_DETAILS_TABS.map((tab) => (
        <Tab
          key={tab.value}
          iconPosition="end"
          value={tab.value}
          label={tab.label}
          icon={
            tab.value === 'bookers' ? <Label variant="filled">{tour?.bookers.length}</Label> : ''
          }
        />
      ))}
    </Tabs>
  );

  return (
    <DashboardContent>
      <TourDetailsToolbar
        backLink={paths.dashboard.tour.root}
        editLink={paths.dashboard.tour.edit(`${tour?.id}`)}
        liveLink="#"
        publish={publish || ''}
        onChangePublish={handleChangePublish}
        publishOptions={TOUR_PUBLISH_OPTIONS}
      />
      {renderTabs}

      {tabs.value === 'content' && <TourDetailsContent tour={tour} />}

      {tabs.value === 'bookers' && <TourDetailsBookers bookers={tour?.bookers} />}
    </DashboardContent>
  );
}
