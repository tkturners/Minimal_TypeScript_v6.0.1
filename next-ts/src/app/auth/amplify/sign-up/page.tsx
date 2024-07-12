import { CONFIG } from 'src/config-global';

import { AmplifySignUpView } from 'src/sections/auth/amplify';

// ----------------------------------------------------------------------

export const metadata = { title: `Sign up | Amplify - ${CONFIG.site.name}` };

export default function Page() {
  return <AmplifySignUpView />;
}
