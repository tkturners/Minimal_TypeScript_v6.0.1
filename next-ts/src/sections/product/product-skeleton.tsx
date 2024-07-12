'use client';

import type { PaperProps } from '@mui/material/Paper';
import type { Grid2Props } from '@mui/material/Unstable_Grid2';

import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Unstable_Grid2';

// ----------------------------------------------------------------------

export function ProductItemSkeleton({
  sx,
  amount = 16,
  ...other
}: PaperProps & {
  amount?: number;
}) {
  return [...Array(amount)].map((_, index) => (
    <Paper key={index} variant="outlined" sx={{ borderRadius: 2, ...sx }} {...other}>
      <Stack sx={{ p: 1 }}>
        <Skeleton sx={{ pt: '100%' }} />
      </Stack>

      <Stack spacing={2} sx={{ p: 3, pt: 2 }}>
        <Skeleton sx={{ width: 0.5, height: 16 }} />
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Stack direction="row">
            <Skeleton variant="circular" sx={{ width: 16, height: 16 }} />
            <Skeleton variant="circular" sx={{ width: 16, height: 16 }} />
            <Skeleton variant="circular" sx={{ width: 16, height: 16 }} />
          </Stack>
          <Skeleton sx={{ width: 40, height: 16 }} />
        </Stack>
      </Stack>
    </Paper>
  ));
}

// ----------------------------------------------------------------------

export function ProductDetailsSkeleton({ ...other }: Grid2Props) {
  return (
    <Grid container spacing={8} {...other}>
      <Grid xs={12} md={6} lg={7}>
        <Skeleton sx={{ pt: '100%' }} />
      </Grid>

      <Grid xs={12} md={6} lg={5}>
        <Stack spacing={3}>
          <Skeleton sx={{ height: 16, width: 48 }} />
          <Skeleton sx={{ height: 16, width: 80 }} />
          <Skeleton sx={{ height: 16, width: 0.5 }} />
          <Skeleton sx={{ height: 16, width: 0.75 }} />
          <Skeleton sx={{ height: 120 }} />
        </Stack>
      </Grid>

      <Grid xs={12}>
        <Stack direction="row" alignItems="center">
          {[...Array(3)].map((_, index) => (
            <Stack
              key={index}
              spacing={2}
              alignItems="center"
              justifyContent="center"
              sx={{ width: 1 }}
            >
              <Skeleton variant="circular" sx={{ width: 80, height: 80 }} />
              <Skeleton sx={{ height: 16, width: 160 }} />
              <Skeleton sx={{ height: 16, width: 80 }} />
            </Stack>
          ))}
        </Stack>
      </Grid>
    </Grid>
  );
}
