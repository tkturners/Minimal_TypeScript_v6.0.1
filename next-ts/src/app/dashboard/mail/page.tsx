import { CONFIG } from 'src/config-global';

import { MailView } from 'src/sections/mail/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Mail | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return <MailView />;
}
