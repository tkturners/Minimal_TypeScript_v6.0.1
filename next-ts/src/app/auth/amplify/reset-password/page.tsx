import { CONFIG } from 'src/config-global';

import { AmplifyResetPasswordView } from 'src/sections/auth/amplify';

// ----------------------------------------------------------------------

export const metadata = { title: `Reset password | Amplify - ${CONFIG.site.name}` };

export default function Page() {
  return <AmplifyResetPasswordView />;
}
