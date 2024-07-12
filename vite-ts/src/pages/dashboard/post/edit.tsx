import { Helmet } from 'react-helmet-async';

import { useParams } from 'src/routes/hooks';

import { CONFIG } from 'src/config-global';
import { useGetPost } from 'src/actions/blog';

import { PostEditView } from 'src/sections/blog/view';

// ----------------------------------------------------------------------

const metadata = { title: `Post edit | Dashboard - ${CONFIG.site.name}` };

export default function Page() {
  const { title = '' } = useParams();

  const { post } = useGetPost(title);

  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <PostEditView post={post} />
    </>
  );
}
