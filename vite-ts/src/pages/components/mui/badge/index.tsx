import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { BadgeView } from 'src/sections/_examples/mui/badge-view';

// ----------------------------------------------------------------------

const metadata = { title: `Badge | MUI - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <BadgeView />
    </>
  );
}
