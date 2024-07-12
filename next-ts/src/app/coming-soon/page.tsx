import { CONFIG } from 'src/config-global';

import { ComingSoonView } from 'src/sections/coming-soon/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Coming soon - ${CONFIG.site.name}` };

export default function Page() {
  return <ComingSoonView />;
}
