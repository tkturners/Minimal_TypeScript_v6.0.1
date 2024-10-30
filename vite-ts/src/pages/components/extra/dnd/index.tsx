import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { DndView } from 'src/sections/_examples/extra/dnd-view';

// ----------------------------------------------------------------------

const metadata = { title: `Dnd | Components - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <DndView />
    </>
  );
}
