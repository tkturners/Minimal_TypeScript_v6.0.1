'use client';

import { paths } from 'src/routes/paths';

import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { FormDialog } from './form-dialog';
import { AlertDialog } from './alert-dialog';
import { ScrollDialog } from './scroll-dialog';
import { SimpleDialog } from './simple-dialog';
import { MaxWidthDialog } from './max-width-dialog';
import { ComponentHero } from '../../component-hero';
import { FullScreenDialog } from './full-screen-dialog';
import { TransitionsDialog } from './transitions-dialog';
import { ComponentBlock, ComponentContainer } from '../../component-block';

// ----------------------------------------------------------------------

export function DialogView() {
  return (
    <>
      <ComponentHero>
        <CustomBreadcrumbs
          heading="Dialog"
          links={[{ name: 'Components', href: paths.components }, { name: 'Dialog' }]}
          moreLink={['https://mui.com/components/dialogs']}
        />
      </ComponentHero>

      <ComponentContainer
        sx={{
          rowGap: 5,
          columnGap: 3,
          display: 'grid',
          gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
        }}
      >
        <ComponentBlock title="Simple">
          <SimpleDialog />
        </ComponentBlock>

        <ComponentBlock title="Alerts">
          <AlertDialog />
        </ComponentBlock>

        <ComponentBlock title="Transitions">
          <TransitionsDialog />
        </ComponentBlock>

        <ComponentBlock title="Form">
          <FormDialog />
        </ComponentBlock>

        <ComponentBlock title="Full Screen">
          <FullScreenDialog />
        </ComponentBlock>

        <ComponentBlock title="Max width dialog">
          <MaxWidthDialog />
        </ComponentBlock>

        <ComponentBlock title="Scrolling content dialogs">
          <ScrollDialog />
        </ComponentBlock>
      </ComponentContainer>
    </>
  );
}
