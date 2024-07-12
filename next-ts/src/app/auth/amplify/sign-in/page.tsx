import { CONFIG } from 'src/config-global';

import { AmplifySignInView } from 'src/sections/auth/amplify';

// ----------------------------------------------------------------------

export const metadata = { title: `Sign in | Amplify - ${CONFIG.site.name}` };

export default function Page() {
  return <AmplifySignInView />;
}
