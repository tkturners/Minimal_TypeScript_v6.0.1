import { CONFIG } from 'src/config-global';

import { CheckoutView } from 'src/sections/checkout/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Checkout - ${CONFIG.site.name}` };

export default function Page() {
  return <CheckoutView />;
}
