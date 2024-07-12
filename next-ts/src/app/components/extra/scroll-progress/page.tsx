import { CONFIG } from 'src/config-global';

import { ScrollProgressView } from 'src/sections/_examples/extra/scroll-progress-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Scroll progress | Components - ${CONFIG.site.name}` };

export default function Page() {
  return <ScrollProgressView />;
}
