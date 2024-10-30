import { CONFIG } from 'src/config-global';

import { CheckboxView } from 'src/sections/_examples/mui/checkbox-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Checkbox | MUI - ${CONFIG.appName}` };

export default function Page() {
  return <CheckboxView />;
}
