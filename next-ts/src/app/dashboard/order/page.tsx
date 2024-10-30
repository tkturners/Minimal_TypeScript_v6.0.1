import { CONFIG } from 'src/config-global';

import { OrderListView } from 'src/sections/order/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Order list | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return <OrderListView />;
}
