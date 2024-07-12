import { CONFIG } from 'src/config-global';

import { PopoverView } from 'src/sections/_examples/mui/popover-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Popover | MUI - ${CONFIG.site.name}` };

export default function Page() {
  return <PopoverView />;
}
