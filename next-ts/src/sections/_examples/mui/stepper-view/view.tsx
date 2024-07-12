'use client';

import { paths } from 'src/routes/paths';

import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { ComponentHero } from '../../component-hero';
import { ComponentBlock } from '../../component-block';
import { CustomizedSteppers } from './customized-steppers';
import { ScrollToViewTemplate } from '../../component-template';
import { VerticalLinearStepper } from './vertical-linear-stepper';
import { HorizontalLinearStepper } from './horizontal-linear-stepper';
import { LinearAlternativeLabel } from './linear-alternative-label-stepper';

// ----------------------------------------------------------------------

export function StepperView() {
  const DEMO = [
    {
      name: 'Horizontal linear stepper',
      component: (
        <ComponentBlock sx={{ flexDirection: 'column', alignItems: 'unset' }}>
          <HorizontalLinearStepper />
        </ComponentBlock>
      ),
    },
    {
      name: 'Linear alternative label',
      component: (
        <ComponentBlock sx={{ flexDirection: 'column', alignItems: 'unset' }}>
          <LinearAlternativeLabel />
        </ComponentBlock>
      ),
    },
    {
      name: 'Vertical linear stepper',
      component: (
        <ComponentBlock sx={{ flexDirection: 'column', alignItems: 'unset' }}>
          <VerticalLinearStepper />
        </ComponentBlock>
      ),
    },
    {
      name: 'Customized stepper',
      component: (
        <ComponentBlock sx={{ flexDirection: 'column', alignItems: 'unset' }}>
          <CustomizedSteppers />
        </ComponentBlock>
      ),
    },
  ];

  return (
    <>
      <ComponentHero>
        <CustomBreadcrumbs
          heading="Stepper"
          links={[{ name: 'Components', href: paths.components }, { name: 'Stepper' }]}
          moreLink={['https://mui.com/components/steppers']}
        />
      </ComponentHero>

      <ScrollToViewTemplate data={DEMO} />
    </>
  );
}
