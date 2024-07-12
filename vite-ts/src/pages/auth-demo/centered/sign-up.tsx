import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { CenteredSignUpView } from 'src/sections/auth-demo/centered';

// ----------------------------------------------------------------------

const metadata = { title: `Sign up | Layout centered - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <CenteredSignUpView />
    </>
  );
}
