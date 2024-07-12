import { CONFIG } from 'src/config-global';

import { OverviewFileView } from 'src/sections/overview/file/view';

// ----------------------------------------------------------------------

export const metadata = { title: `File | Dashboard - ${CONFIG.site.name}` };

export default function Page() {
  return <OverviewFileView />;
}
