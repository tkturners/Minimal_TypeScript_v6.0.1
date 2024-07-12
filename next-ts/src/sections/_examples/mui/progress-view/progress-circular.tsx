import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

import { ComponentBlock } from '../../component-block';

// ----------------------------------------------------------------------

const COLORS = ['inherit', 'primary', 'secondary', 'info', 'success', 'warning', 'error'] as const;

// ----------------------------------------------------------------------

type CircularProps = {
  progress: number;
};

export function ProgressCircular({ progress }: CircularProps) {
  return (
    <Stack spacing={5}>
      <ComponentBlock title="Indeterminate">
        {COLORS.map((color) => (
          <CircularProgress key={color} color={color} />
        ))}
      </ComponentBlock>

      <ComponentBlock title="Determinate">
        <CircularProgress color="info" />
        <CircularProgress color="info" variant="determinate" value={25} />
        <CircularProgress color="info" variant="determinate" value={50} />
        <CircularProgress color="info" variant="determinate" value={75} />
        <CircularProgress color="info" variant="determinate" value={100} />
        <CircularProgress color="info" variant="determinate" value={progress} />
      </ComponentBlock>

      <ComponentBlock title="Sizes">
        <CircularProgress size={48} color="info" />
        <CircularProgress color="info" />
        <CircularProgress size={32} color="info" />
        <CircularProgress size={24} color="info" />
      </ComponentBlock>
    </Stack>
  );
}
