import { CONFIG } from 'src/config-global';

import { PaymentView } from 'src/sections/payment/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Payment - ${CONFIG.site.name}` };

export default function Page() {
  return <PaymentView />;
}
