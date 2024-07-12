import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { varAlpha, stylesMode } from 'src/theme/styles';

import type { NodeProps } from './data';

// ----------------------------------------------------------------------

export function SimpleNode({ name, role, sx }: NodeProps) {
  return (
    <Box
      gap={0.5}
      display="inline-flex"
      flexDirection="column"
      onClick={() => console.info(name)}
      sx={{
        p: 2,
        borderRadius: 1.5,
        cursor: 'pointer',
        color: 'primary.darker',
        bgcolor: (theme) => varAlpha(theme.vars.palette.primary.mainChannel, 0.08),
        border: (theme) => `1px solid ${varAlpha(theme.vars.palette.primary.mainChannel, 0.24)}`,
        [stylesMode.dark]: { color: 'primary.lighter' },
        ...sx,
      }}
    >
      <Typography variant="subtitle2">{name}</Typography>
      <Typography variant="caption" sx={{ opacity: 0.48 }}>
        {role}
      </Typography>
    </Box>
  );
}
