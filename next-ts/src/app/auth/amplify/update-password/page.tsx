import { CONFIG } from 'src/config-global';

import { AmplifyUpdatePasswordView } from 'src/sections/auth/amplify';

// ----------------------------------------------------------------------

export const metadata = { title: `Update password | Amplify - ${CONFIG.site.name}` };

export default function Page() {
  return <AmplifyUpdatePasswordView />;
}
