import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { CheckoutView } from 'src/sections/checkout/view';

// ----------------------------------------------------------------------

const metadata = { title: `Checkout - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <CheckoutView />
    </>
  );
}
