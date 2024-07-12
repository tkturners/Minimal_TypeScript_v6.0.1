import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { OverviewBankingView } from 'src/sections/overview/banking/view';

// ----------------------------------------------------------------------

const metadata = { title: `Banking | Dashboard - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <OverviewBankingView />
    </>
  );
}
