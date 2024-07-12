import { CONFIG } from 'src/config-global';

import { FormWizardView } from 'src/sections/_examples/extra/form-wizard-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Form wizard | Components - ${CONFIG.site.name}` };

export default function Page() {
  return <FormWizardView />;
}
