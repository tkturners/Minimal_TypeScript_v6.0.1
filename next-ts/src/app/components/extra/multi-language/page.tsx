import { CONFIG } from 'src/config-global';
import { getServerTranslations } from 'src/locales/server';

import { MultiLanguageView } from 'src/sections/_examples/extra/multi-language-view';
import { navData } from 'src/sections/_examples/extra/multi-language-view/config-nav';

// ----------------------------------------------------------------------

export const metadata = { title: `Multi language | Components - ${CONFIG.site.name}` };

export default async function Page() {
  let ssrNavData;

  if (!CONFIG.isStaticExport) {
    const { t } = await getServerTranslations('navbar');
    const data = navData(t);

    ssrNavData = data;
  }

  return <MultiLanguageView ssrNavData={ssrNavData} />;
}
