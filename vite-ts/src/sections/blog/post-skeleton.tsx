import type { StackProps } from '@mui/material/Stack';

import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';

import { useResponsive } from 'src/hooks/use-responsive';

// ----------------------------------------------------------------------

type PostItemSkeletonProps = StackProps & {
  variant?: 'vertical' | 'horizontal';
  amount?: number;
};

export function PostItemSkeleton({
  sx,
  amount = 16,
  variant = 'vertical',
  ...other
}: PostItemSkeletonProps) {
  const smUp = useResponsive('up', 'sm');

  if (variant === 'horizontal') {
    return [...Array(amount)].map((_, index) => (
      <Stack
        key={index}
        direction="row"
        sx={{
          borderRadius: 2,
          bgcolor: 'background.paper',
          border: (theme) => `solid 1px ${theme.vars.palette.divider}`,
          ...sx,
        }}
        {...other}
      >
        <Stack spacing={2} flexGrow={1} sx={{ p: 3 }}>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Skeleton variant="circular" sx={{ width: 40, height: 40 }} />
            <Skeleton sx={{ width: 24, height: 12 }} />
          </Stack>

          <Skeleton sx={{ width: 1, height: 10 }} />
          <Skeleton sx={{ width: `calc(100% - 40px)`, height: 10 }} />
          <Skeleton sx={{ width: `calc(100% - 80px)`, height: 10 }} />
        </Stack>

        {smUp && (
          <Stack sx={{ p: 1 }}>
            <Skeleton sx={{ width: 170, height: 240, flexShrink: 0 }} />
          </Stack>
        )}
      </Stack>
    ));
  }

  return [...Array(amount)].map((_, index) => (
    <Stack
      key={index}
      sx={{
        borderRadius: 2,
        bgcolor: 'background.paper',
        border: (theme) => `solid 1px ${theme.vars.palette.divider}`,
        ...sx,
      }}
      {...other}
    >
      <Stack sx={{ p: 1 }}>
        <Skeleton sx={{ pt: '100%' }} />
      </Stack>

      <Stack spacing={2} direction="row" alignItems="center" sx={{ p: 3, pt: 2 }}>
        <Skeleton variant="circular" sx={{ width: 40, height: 40, flexShrink: 0 }} />
        <Stack flexGrow={1} spacing={1}>
          <Skeleton sx={{ height: 10 }} />
          <Skeleton sx={{ width: 0.5, height: 10 }} />
        </Stack>
      </Stack>
    </Stack>
  ));
}

// ----------------------------------------------------------------------

export function PostDetailsSkeleton({ ...other }: StackProps) {
  return (
    <Stack {...other}>
      <Skeleton variant="rectangular" sx={{ height: 480 }} />

      <Stack sx={{ width: 1, maxWidth: 720, mx: 'auto' }}>
        <Stack spacing={1} sx={{ my: 8 }}>
          <Skeleton height={10} />
          <Skeleton height={10} sx={{ width: 0.9 }} />
          <Skeleton height={10} sx={{ width: 0.8 }} />
        </Stack>

        <Skeleton sx={{ height: 720, mb: 8 }} />
      </Stack>
    </Stack>
  );
}
