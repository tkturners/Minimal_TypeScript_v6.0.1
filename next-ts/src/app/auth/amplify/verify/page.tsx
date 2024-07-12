import { CONFIG } from 'src/config-global';

import { AmplifyVerifyView } from 'src/sections/auth/amplify';

// ----------------------------------------------------------------------

export const metadata = { title: `Verify | Amplify - ${CONFIG.site.name}` };

export default function Page() {
  return <AmplifyVerifyView />;
}
