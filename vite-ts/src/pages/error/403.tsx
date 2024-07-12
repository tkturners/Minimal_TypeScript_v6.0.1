import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { View403 } from 'src/sections/error';

// ----------------------------------------------------------------------

const metadata = { title: `403 forbidden! | Error - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <View403 />
    </>
  );
}
