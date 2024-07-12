import axios, { endpoints } from 'src/utils/axios';

import { CONFIG } from 'src/config-global';

import { ProductDetailsView } from 'src/sections/product/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Product details | Dashboard - ${CONFIG.site.name}` };

type Props = {
  params: { id: string };
};

export default async function Page({ params }: Props) {
  const { id } = params;

  const { product } = await getProduct(id);

  return <ProductDetailsView product={product} />;
}

// ----------------------------------------------------------------------

async function getProduct(id: string) {
  const URL = id ? `${endpoints.product.details}?productId=${id}` : '';

  const res = await axios.get(URL);

  return res.data;
}

/**
 * [1] Default
 * Remove [1] and [2] if not using [2]
 */
const dynamic = CONFIG.isStaticExport ? 'auto' : 'force-dynamic';

export { dynamic };

/**
 * [2] Static exports
 * https://nextjs.org/docs/app/building-your-application/deploying/static-exports
 */
export async function generateStaticParams() {
  if (CONFIG.isStaticExport) {
    const res = await axios.get(endpoints.product.list);

    return res.data.products.map((product: { id: string }) => ({ id: product.id }));
  }
  return [];
}
