import { CONFIG } from 'src/config-global';
import { getProducts } from 'src/actions/product-ssr';

import { ProductShopView } from 'src/sections/product/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Product shop - ${CONFIG.site.name}` };

export default async function Page() {
  const { products } = await getProducts();

  return <ProductShopView products={products} />;
}
