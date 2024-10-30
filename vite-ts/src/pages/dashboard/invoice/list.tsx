import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { InvoiceListView } from 'src/sections/invoice/view';

// ----------------------------------------------------------------------

const metadata = { title: `Invoice list | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <InvoiceListView />
    </>
  );
}
