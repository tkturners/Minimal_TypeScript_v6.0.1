import { CONFIG } from 'src/config-global';

import { View500 } from 'src/sections/error';

// ----------------------------------------------------------------------

export const metadata = { title: `500 Internal server error! | Error - ${CONFIG.site.name}` };

export default function Page() {
  return <View500 />;
}
