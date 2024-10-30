import { CONFIG } from 'src/config-global';

import { TourCreateView } from 'src/sections/tour/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Create a new tour | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return <TourCreateView />;
}
