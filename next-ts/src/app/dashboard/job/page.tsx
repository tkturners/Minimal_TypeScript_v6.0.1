import { CONFIG } from 'src/config-global';

import { JobListView } from 'src/sections/job/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Job list | Dashboard - ${CONFIG.site.name}` };

export default function Page() {
  return <JobListView />;
}
