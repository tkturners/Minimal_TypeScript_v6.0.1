import { CONFIG } from 'src/config-global';

import { ProductCreateView } from 'src/sections/product/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Create a new product | Dashboard - ${CONFIG.site.name}` };

export default function Page() {
  return <ProductCreateView />;
}
