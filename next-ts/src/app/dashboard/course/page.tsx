import { CONFIG } from 'src/config-global';

import { OverviewCourseView } from 'src/sections/overview/course/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Course | Dashboard - ${CONFIG.site.name}` };

export default function Page() {
  return <OverviewCourseView />;
}
