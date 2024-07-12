import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { ContactView } from 'src/sections/contact/view';

// ----------------------------------------------------------------------

const metadata = { title: `Contact us - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <ContactView />
    </>
  );
}
