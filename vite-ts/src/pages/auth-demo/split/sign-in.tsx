import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { SplitSignInView } from 'src/sections/auth-demo/split';

// ----------------------------------------------------------------------

const metadata = { title: `Sign in | Layout split - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <SplitSignInView />
    </>
  );
}
