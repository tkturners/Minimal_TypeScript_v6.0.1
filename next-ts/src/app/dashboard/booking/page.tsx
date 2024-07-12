import { CONFIG } from 'src/config-global';

import { OverviewBookingView } from 'src/sections/overview/booking/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Booking | Dashboard - ${CONFIG.site.name}` };

export default function Page() {
  return <OverviewBookingView />;
}
