import { paramCase } from 'src/utils/change-case';
import axios, { endpoints } from 'src/utils/axios';

import { CONFIG } from 'src/config-global';

import { PostEditView } from 'src/sections/blog/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Post edit | Dashboard - ${CONFIG.appName}` };

type Props = {
  params: { title: string };
};

export default async function Page({ params }: Props) {
  const { title } = params;

  const { post } = await getPost(title);

  return <PostEditView post={post} />;
}

// ----------------------------------------------------------------------

async function getPost(title: string) {
  const URL = title ? `${endpoints.post.details}?title=${title}` : '';

  const res = await axios.get(URL);

  return res.data;
}

/**
 * [1] Default
 * Remove [1] and [2] if not using [2]
 */
const dynamic = CONFIG.isStaticExport ? 'auto' : 'force-dynamic';

export { dynamic };

/**
 * [2] Static exports
 * https://nextjs.org/docs/app/building-your-application/deploying/static-exports
 */
export async function generateStaticParams() {
  if (CONFIG.isStaticExport) {
    const res = await axios.get(endpoints.post.list);

    return res.data.posts.map((post: { title: string }) => ({ title: paramCase(post.title) }));
  }
  return [];
}
