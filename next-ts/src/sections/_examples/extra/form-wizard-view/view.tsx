'use client';

import { paths } from 'src/routes/paths';

import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { FormWizard } from './form-wizard';
import { ComponentHero } from '../../component-hero';
import { ComponentContainer } from '../../component-block';

// ----------------------------------------------------------------------

export function FormWizardView() {
  return (
    <>
      <ComponentHero>
        <CustomBreadcrumbs
          heading="Form wizard"
          links={[{ name: 'Components', href: paths.components }, { name: 'Form wizard' }]}
          moreLink={['https://react-hook-form.com', 'https://zod.dev']}
        />
      </ComponentHero>

      <ComponentContainer>
        <FormWizard />
      </ComponentContainer>
    </>
  );
}
