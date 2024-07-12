import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { OverviewFileView } from 'src/sections/overview/file/view';

// ----------------------------------------------------------------------

const metadata = { title: `File | Dashboard - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <OverviewFileView />
    </>
  );
}
