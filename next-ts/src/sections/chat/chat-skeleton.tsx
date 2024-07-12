import type { StackProps } from '@mui/material/Stack';

import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
import CircularProgress from '@mui/material/CircularProgress';

// ----------------------------------------------------------------------

export function ChatNavItemSkeleton({
  sx,
  amount = 6,
  ...other
}: StackProps & {
  amount?: number;
}) {
  return [...Array(amount)].map((_, index) => (
    <Stack
      key={index}
      spacing={2}
      direction="row"
      alignItems="center"
      sx={{ px: 2.5, py: 1.5, ...sx }}
      {...other}
    >
      <Skeleton variant="circular" sx={{ width: 48, height: 48 }} />

      <Stack spacing={1} flexGrow={1}>
        <Skeleton sx={{ width: 0.75, height: 10 }} />
        <Skeleton sx={{ width: 0.5, height: 10 }} />
      </Stack>
    </Stack>
  ));
}

// ----------------------------------------------------------------------

export function ChatHeaderSkeleton({ sx, ...other }: StackProps) {
  return (
    <Stack direction="row" alignItems="center" sx={{ width: 1, ...sx }} {...other}>
      <Skeleton variant="circular" sx={{ width: 40, height: 40 }} />
      <Stack spacing={1} flexGrow={1} sx={{ mx: 2 }}>
        <Skeleton sx={{ width: 96, height: 10 }} />
        <Skeleton sx={{ width: 40, height: 10 }} />
      </Stack>
      <Skeleton variant="circular" sx={{ width: 28, height: 28 }} />
      <Skeleton variant="circular" sx={{ width: 28, height: 28, mx: 1 }} />
      <Skeleton variant="circular" sx={{ width: 28, height: 28, mr: 1 }} />
    </Stack>
  );
}

// ----------------------------------------------------------------------

export function ChatRoomSkeleton({ sx, ...other }: StackProps) {
  return (
    <Stack flexGrow={1} sx={{ pt: 5, ...sx }} {...other}>
      <Stack alignItems="center">
        <Skeleton variant="circular" sx={{ width: 96, height: 96 }} />
        <Skeleton sx={{ mb: 1, mt: 2, height: 10, width: 0.65 }} />
        <Skeleton sx={{ width: 0.35, height: 10, mb: 5 }} />
        <CircularProgress color="inherit" thickness={2} />
      </Stack>
    </Stack>
  );
}
