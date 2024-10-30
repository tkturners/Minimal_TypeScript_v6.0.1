import { CONFIG } from 'src/config-global';

import { CalendarView } from 'src/sections/calendar/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Calendar | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return <CalendarView />;
}
