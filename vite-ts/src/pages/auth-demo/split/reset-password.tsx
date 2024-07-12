import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { SplitResetPasswordView } from 'src/sections/auth-demo/split';

// ----------------------------------------------------------------------

const metadata = { title: `Reset password | Layout split - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <SplitResetPasswordView />
    </>
  );
}
