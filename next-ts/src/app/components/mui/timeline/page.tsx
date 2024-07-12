import { CONFIG } from 'src/config-global';

import { TimelineView } from 'src/sections/_examples/mui/timeline-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Timeline | MUI - ${CONFIG.site.name}` };

export default function Page() {
  return <TimelineView />;
}
