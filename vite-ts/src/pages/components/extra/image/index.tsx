import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { ImageView } from 'src/sections/_examples/extra/image-view';

// ----------------------------------------------------------------------

const metadata = { title: `Image | Components - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <ImageView />
    </>
  );
}
