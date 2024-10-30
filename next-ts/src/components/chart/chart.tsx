import type { BoxProps } from '@mui/material/Box';

import dynamic from 'next/dynamic';

import Box from '@mui/material/Box';

import { withLoadingProps } from 'src/utils/with-loading-props';

import { chartClasses } from './classes';
import { ChartLoading } from './chart-loading';

import type { ChartProps, ChartBaseProps, ChartLoadingProps } from './types';

// ----------------------------------------------------------------------

type WithLoadingProps = ChartBaseProps & {
  loading?: ChartLoadingProps;
};

const ApexChart = withLoadingProps<WithLoadingProps>((props) =>
  dynamic(() => import('react-apexcharts').then((mod) => mod.default), {
    ssr: false,
    loading: () => {
      const { loading, type } = props();

      return loading?.disabled ? null : <ChartLoading type={type} sx={loading?.sx} />;
    },
  })
);

export function Chart({
  sx,
  type,
  series,
  height,
  options,
  className,
  loadingProps,
  width = '100%',
  ...other
}: BoxProps & ChartProps) {
  return (
    <Box
      dir="ltr"
      className={chartClasses.root.concat(className ? ` ${className}` : '')}
      sx={{
        width,
        height,
        flexShrink: 0,
        borderRadius: 1.5,
        position: 'relative',
        ...sx,
      }}
      {...other}
    >
      <ApexChart
        type={type}
        series={series}
        options={options}
        width="100%"
        height="100%"
        loading={loadingProps}
      />
    </Box>
  );
}
