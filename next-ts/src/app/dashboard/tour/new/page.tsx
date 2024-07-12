import { CONFIG } from 'src/config-global';

import { TourCreateView } from 'src/sections/tour/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Create a new tour | Dashboard - ${CONFIG.site.name}` };

export default function Page() {
  return <TourCreateView />;
}
