import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { MapView } from 'src/sections/_examples/extra/map-view';

// ----------------------------------------------------------------------

const metadata = { title: `Map | Components - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <MapView />
    </>
  );
}
