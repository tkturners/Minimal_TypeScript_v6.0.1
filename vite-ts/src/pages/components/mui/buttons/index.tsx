import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { ButtonView } from 'src/sections/_examples/mui/button-view';

// ----------------------------------------------------------------------

const metadata = { title: `Button | MUI - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <ButtonView />
    </>
  );
}
