import { paths } from 'src/routes/paths';

import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { ComponentHero } from '../../component-hero';
import { ComponentBlock } from '../../component-block';
import { SimpleTransferList } from './simple-transfer-list';
import { ScrollToViewTemplate } from '../../component-template';
import { EnhancedTransferList } from './enhanced-transfer-list';

// ----------------------------------------------------------------------

export function TransferListView() {
  const DEMO = [
    {
      name: 'Simple',
      component: (
        <ComponentBlock>
          <SimpleTransferList />
        </ComponentBlock>
      ),
    },
    {
      name: 'Enhanced',
      component: (
        <ComponentBlock>
          <EnhancedTransferList />
        </ComponentBlock>
      ),
    },
  ];

  return (
    <>
      <ComponentHero>
        <CustomBreadcrumbs
          heading="Transfer List"
          links={[{ name: 'Components', href: paths.components }, { name: 'Transfer List' }]}
          moreLink={['https://mui.com/components/transfer-list']}
        />
      </ComponentHero>

      <ScrollToViewTemplate data={DEMO} />
    </>
  );
}
