'use client';

import { DashboardContent } from 'src/layouts/dashboard';

import { ProductDetailsSkeleton } from 'src/sections/product/product-skeleton';

// ----------------------------------------------------------------------

export default function Loading() {
  return (
    <DashboardContent sx={{ pt: 5 }}>
      <ProductDetailsSkeleton />
    </DashboardContent>
  );
}
