import { CONFIG } from 'src/config-global';

import { AutocompleteView } from 'src/sections/_examples/mui/autocomplete-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Autocomplete | MUI - ${CONFIG.appName}` };

export default function Page() {
  return <AutocompleteView />;
}
