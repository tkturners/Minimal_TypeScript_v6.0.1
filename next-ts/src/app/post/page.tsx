import { CONFIG } from 'src/config-global';
import { getPosts } from 'src/actions/blog-ssr';

import { PostListHomeView } from 'src/sections/blog/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Post list - ${CONFIG.appName}` };

export default async function Page() {
  const { posts } = await getPosts();

  return <PostListHomeView posts={posts} />;
}
