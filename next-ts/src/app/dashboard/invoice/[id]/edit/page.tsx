import { CONFIG } from 'src/config-global';
import { _invoices } from 'src/_mock/_invoice';

import { InvoiceEditView } from 'src/sections/invoice/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Invoice edit | Dashboard - ${CONFIG.site.name}` };

type Props = {
  params: { id: string };
};

export default function Page({ params }: Props) {
  const { id } = params;

  const currentInvoice = _invoices.find((invoice) => invoice.id === id);

  return <InvoiceEditView invoice={currentInvoice} />;
}

// ----------------------------------------------------------------------

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
    return _invoices.map((invoice) => ({ id: invoice.id }));
  }
  return [];
}
