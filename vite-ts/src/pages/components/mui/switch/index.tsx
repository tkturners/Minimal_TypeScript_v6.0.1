import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { SwitchView } from 'src/sections/_examples/mui/switch-view';

// ----------------------------------------------------------------------

const metadata = { title: `Switch | MUI - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <SwitchView />
    </>
  );
}
