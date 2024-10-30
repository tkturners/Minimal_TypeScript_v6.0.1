import { CONFIG } from 'src/config-global';

import { FaqsView } from 'src/sections/faqs/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Faqs - ${CONFIG.appName}` };

export default function Page() {
  return <FaqsView />;
}
