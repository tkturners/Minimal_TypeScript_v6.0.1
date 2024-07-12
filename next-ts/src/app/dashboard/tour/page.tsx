import { CONFIG } from 'src/config-global';

import { TourListView } from 'src/sections/tour/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Tour list | Dashboard - ${CONFIG.site.name}` };

export default function Page() {
  return <TourListView />;
}
