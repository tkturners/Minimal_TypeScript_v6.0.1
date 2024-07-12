import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { ProgressView } from 'src/sections/_examples/mui/progress-view';

// ----------------------------------------------------------------------

const metadata = { title: `Progress | MUI - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <ProgressView />
    </>
  );
}
