import { CONFIG } from 'src/config-global';

import { PostListView } from 'src/sections/blog/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Post list | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return <PostListView />;
}
