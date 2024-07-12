import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { UtilitiesView } from 'src/sections/_examples/extra/utilities-view';

// ----------------------------------------------------------------------

const metadata = { title: `Utilities | Components - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <UtilitiesView />
    </>
  );
}
