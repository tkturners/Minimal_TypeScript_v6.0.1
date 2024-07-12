import { CONFIG } from 'src/config-global';

import { CalendarView } from 'src/sections/calendar/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Calendar | Dashboard - ${CONFIG.site.name}` };

export default function Page() {
  return <CalendarView />;
}
