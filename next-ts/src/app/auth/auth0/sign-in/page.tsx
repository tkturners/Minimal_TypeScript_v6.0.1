import { CONFIG } from 'src/config-global';

import { Auth0SignInView } from 'src/sections/auth/auth0';

// ----------------------------------------------------------------------

export const metadata = { title: `Sign in | Auth0 - ${CONFIG.site.name}` };

export default function Page() {
  return <Auth0SignInView />;
}
