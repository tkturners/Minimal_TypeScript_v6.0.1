import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { SplitUpdatePasswordView } from 'src/sections/auth-demo/split';

// ----------------------------------------------------------------------

const metadata = { title: `Update password | Layout split - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <SplitUpdatePasswordView />
    </>
  );
}
