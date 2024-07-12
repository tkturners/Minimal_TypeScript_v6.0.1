import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';

import { ComponentBlock } from '../../component-block';

// ----------------------------------------------------------------------

const COLORS = ['inherit', 'primary', 'secondary', 'info', 'success', 'warning', 'error'] as const;

// ----------------------------------------------------------------------

type LinearProps = {
  progress: number;
  buffer: number;
};

export function ProgressLinear({ progress, buffer }: LinearProps) {
  return (
    <Stack
      sx={{
        rowGap: 5,
        columnGap: 3,
        display: 'grid',
        gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' },
      }}
    >
      <ComponentBlock title="Indeterminate" sx={{ flexDirection: 'column' }}>
        {COLORS.map((color) => (
          <LinearProgress key={color} color={color} sx={{ mb: 2, width: 1 }} />
        ))}
      </ComponentBlock>

      <ComponentBlock title="Determinate" sx={{ flexDirection: 'column' }}>
        {COLORS.map((color) => (
          <LinearProgress
            key={color}
            color={color}
            value={progress}
            variant="determinate"
            sx={{ mb: 2, width: 1 }}
          />
        ))}
      </ComponentBlock>

      <ComponentBlock title="Buffer" sx={{ flexDirection: 'column' }}>
        {COLORS.map((color) => (
          <LinearProgress
            key={color}
            color={color}
            variant="buffer"
            value={progress}
            valueBuffer={buffer}
            sx={{ mb: 2, width: 1 }}
          />
        ))}
      </ComponentBlock>

      <ComponentBlock title="Query" sx={{ flexDirection: 'column' }}>
        {COLORS.map((color) => (
          <LinearProgress
            key={color}
            color={color}
            variant="query"
            value={progress}
            valueBuffer={buffer}
            sx={{ mb: 2, width: 1 }}
          />
        ))}
      </ComponentBlock>
    </Stack>
  );
}
