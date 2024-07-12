import { DashboardContent } from 'src/layouts/dashboard';

import { PostDetailsSkeleton } from 'src/sections/blog/post-skeleton';

// ----------------------------------------------------------------------

export default function Loading() {
  return (
    <DashboardContent maxWidth={false} disablePadding>
      <PostDetailsSkeleton />
    </DashboardContent>
  );
}
