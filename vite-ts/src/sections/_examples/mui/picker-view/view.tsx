import { paths } from 'src/routes/paths';

import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { PickerDate } from './picker-date';
import { PickerTime } from './picker-time';
import { PickerDateTime } from './picker-date-time';
import { ComponentHero } from '../../component-hero';
import { PickerDateRange } from './picker-date-range';
import { ScrollToViewTemplate } from '../../component-template';

// ----------------------------------------------------------------------

export function PickerView() {
  const DEMO = [
    { name: 'Date', component: <PickerDate /> },
    { name: 'DateTime', component: <PickerDateTime /> },
    { name: 'Time', component: <PickerTime /> },
    { name: 'Range', component: <PickerDateRange /> },
  ];

  return (
    <>
      <ComponentHero>
        <CustomBreadcrumbs
          heading="Date Time Pickers"
          links={[{ name: 'Components', href: paths.components }, { name: 'Date Time Pickers' }]}
          moreLink={[
            'https://mui.com/components/pickers',
            'https://mui.com/x/react-date-pickers/getting-started/',
          ]}
        />
      </ComponentHero>

      <ScrollToViewTemplate data={DEMO} />
    </>
  );
}
