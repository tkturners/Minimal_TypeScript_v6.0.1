import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { MarkdownView } from 'src/sections/_examples/extra/markdown-view';

// ----------------------------------------------------------------------

const metadata = { title: `Markdown | Components - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <MarkdownView />
    </>
  );
}
