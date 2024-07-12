'use client';

import { paths } from 'src/routes/paths';

import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { Gradient } from './gradient';
import { Countdown } from './countdown';
import { TextMaxLine } from './text-max-line';
import { ComponentHero } from '../../component-hero';
import { CopyToClipboard } from './copy-to-clipboard';
import { ScrollToViewTemplate } from '../../component-template';

// ----------------------------------------------------------------------

export function UtilitiesView() {
  const DEMO = [
    { name: 'Text max line', component: <TextMaxLine /> },
    { name: 'Copy to clipboard', component: <CopyToClipboard /> },
    { name: 'Gradient', component: <Gradient /> },
    { name: 'Countdown', component: <Countdown /> },
  ];

  return (
    <>
      <ComponentHero>
        <CustomBreadcrumbs
          heading="Utilities"
          links={[{ name: 'Components', href: paths.components }, { name: 'Utilities' }]}
        />
      </ComponentHero>

      <ScrollToViewTemplate data={DEMO} />
    </>
  );
}
