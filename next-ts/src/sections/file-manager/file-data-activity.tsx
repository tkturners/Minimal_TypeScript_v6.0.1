import type { CardProps } from '@mui/material/Card';
import type { ChartOptions } from 'src/components/chart';

import { useState, useCallback } from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { useTheme, alpha as hexAlpha } from '@mui/material/styles';

import { fData } from 'src/utils/format-number';

import { Chart, useChart, ChartSelect } from 'src/components/chart';

// ----------------------------------------------------------------------

type Props = CardProps & {
  title?: string;
  subheader?: string;
  chart: {
    colors?: string[];
    series: {
      name: string;
      categories?: string[];
      data: {
        name: string;
        data: number[];
      }[];
    }[];
    options?: ChartOptions;
  };
};

export function FileDataActivity({ title, subheader, chart, ...other }: Props) {
  const theme = useTheme();

  const [selectedSeries, setSelectedSeries] = useState('Yearly');

  const currentSeries = chart.series.find((i) => i.name === selectedSeries);

  const chartColors = chart.colors ?? [
    theme.palette.primary.main,
    theme.palette.error.main,
    theme.palette.warning.main,
    hexAlpha(theme.palette.grey[500], 0.48),
  ];

  const chartOptions = useChart({
    chart: {
      stacked: true,
    },
    colors: chartColors,
    stroke: {
      width: 0,
    },
    legend: {
      show: true,
    },
    xaxis: {
      categories: currentSeries?.categories,
    },
    tooltip: {
      y: { formatter: (value: number) => fData(value) },
    },
    ...chart.options,
  });

  const handleChangeSeries = useCallback((newValue: string) => {
    setSelectedSeries(newValue);
  }, []);

  return (
    <Card {...other}>
      <CardHeader
        title={title}
        subheader={subheader}
        action={
          <ChartSelect
            options={chart.series.map((i) => i.name)}
            value={selectedSeries}
            onChange={handleChangeSeries}
          />
        }
      />

      <Chart
        type="bar"
        series={currentSeries?.data}
        options={chartOptions}
        height={370}
        loadingProps={{ sx: { p: 2.5 } }}
        sx={{ py: 2.5, pl: 1, pr: 2.5 }}
      />
    </Card>
  );
}
