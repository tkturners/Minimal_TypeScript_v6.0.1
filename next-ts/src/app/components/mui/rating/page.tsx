import { CONFIG } from 'src/config-global';

import { RatingView } from 'src/sections/_examples/mui/rating-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Rating | MUI - ${CONFIG.site.name}` };

export default function Page() {
  return <RatingView />;
}
