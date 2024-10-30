import { CONFIG } from 'src/config-global';

import { InvoiceListView } from 'src/sections/invoice/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Invoice list | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return <InvoiceListView />;
}
