import { CONFIG } from 'src/config-global';

import { PricingView } from 'src/sections/pricing/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Pricing - ${CONFIG.appName}` };

export default function Page() {
  return <PricingView />;
}
