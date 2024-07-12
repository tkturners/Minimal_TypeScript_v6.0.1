import { CONFIG } from 'src/config-global';

import { PaginationView } from 'src/sections/_examples/mui/pagination-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Pagination | MUI - ${CONFIG.site.name}` };

export default function Page() {
  return <PaginationView />;
}
