import { CONFIG } from 'src/config-global';

import { EditorView } from 'src/sections/_examples/extra/editor-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Editor | Components - ${CONFIG.appName}` };

export default function Page() {
  return <EditorView />;
}
