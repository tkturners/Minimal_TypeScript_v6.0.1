import type { CardProps } from '@mui/material/Card';
import type { ChartOptions } from 'src/components/chart';

import { useState, useCallback } from 'react';

import Card from '@mui/material/Card';
import { useTheme } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';

import { Chart, useChart, ChartSelect } from 'src/components/chart';

// ----------------------------------------------------------------------

type Props = CardProps & {
  title?: string;
  subheader?: string;
  chart: {
    colors?: string[];
    series: {
      name: string;
      categories: string[];
      data: {
        data: number[];
      }[];
    }[];
    options?: ChartOptions;
  };
};

export function CourseHoursSpent({ title, subheader, chart, ...other }: Props) {
  const theme = useTheme();

  const [selectedSeries, setSelectedSeries] = useState('Yearly');

  const currentSeries = chart.series.find((i) => i.name === selectedSeries);

  const chartColors = chart.colors ?? [theme.palette.text.primary];

  const chartOptions = useChart({
    grid: { padding: { left: 24 } },
    stroke: { width: 3 },
    colors: chartColors,
    xaxis: { categories: currentSeries?.categories },
    tooltip: { y: { formatter: (value: number) => `${value} h`, title: { formatter: () => '' } } },
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
            options={chart.series.map((item) => item.name)}
            value={selectedSeries}
            onChange={handleChangeSeries}
          />
        }
        sx={{ mb: 3 }}
      />

      <Chart
        type="line"
        series={currentSeries?.data}
        options={chartOptions}
        height={320}
        sx={{ py: 2.5, pl: 1, pr: 2.5 }}
      />
    </Card>
  );
}
