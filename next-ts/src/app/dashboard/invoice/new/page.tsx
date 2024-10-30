import { CONFIG } from 'src/config-global';

import { InvoiceCreateView } from 'src/sections/invoice/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Create a new invoice | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return <InvoiceCreateView />;
}
