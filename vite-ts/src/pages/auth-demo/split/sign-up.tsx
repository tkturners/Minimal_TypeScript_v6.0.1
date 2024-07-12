import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { SplitSignUpView } from 'src/sections/auth-demo/split';

// ----------------------------------------------------------------------

const metadata = { title: `Sign up | Layout split - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <SplitSignUpView />
    </>
  );
}
