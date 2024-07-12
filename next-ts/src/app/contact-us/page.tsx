import { CONFIG } from 'src/config-global';

import { ContactView } from 'src/sections/contact/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Contact us - ${CONFIG.site.name}` };

export default function Page() {
  return <ContactView />;
}
