import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { FormWizardView } from 'src/sections/_examples/extra/form-wizard-view';

// ----------------------------------------------------------------------

const metadata = { title: `Form wizard | Components - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <FormWizardView />
    </>
  );
}
