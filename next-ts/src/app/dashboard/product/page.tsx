import { CONFIG } from 'src/config-global';

import { ProductListView } from 'src/sections/product/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Product list | Dashboard - ${CONFIG.site.name}` };

export default function Page() {
  return <ProductListView />;
}
