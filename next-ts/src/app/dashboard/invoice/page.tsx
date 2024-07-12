import { CONFIG } from 'src/config-global';

import { InvoiceListView } from 'src/sections/invoice/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Invoice list | Dashboard - ${CONFIG.site.name}` };

export default function Page() {
  return <InvoiceListView />;
}
