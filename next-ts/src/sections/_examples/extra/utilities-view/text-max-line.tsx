import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { maxLine } from 'src/theme/styles';

import { ComponentBlock } from '../../component-block';

// ----------------------------------------------------------------------

const content = `
Donec posuere vulputate arcu. Fusce vulputate eleifend sapien. Phasellus magna. Proin
sapien ipsum, porta a, auctor quis, euismod ut, mi. Suspendisse faucibus, nunc et
pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor.
`;

export function TextMaxLine() {
  const theme = useTheme();

  return (
    <Stack
      sx={{
        rowGap: 5,
        columnGap: 3,
        display: 'grid',
        gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' },
      }}
    >
      <ComponentBlock
        title="1 Line"
        sx={{ flexDirection: 'column', alignItems: 'unset', minWidth: 0 }}
      >
        <Typography noWrap sx={{ width: 1 }}>
          {content}
        </Typography>
      </ComponentBlock>

      <ComponentBlock
        title="2 Line"
        sx={{ flexDirection: 'column', alignItems: 'unset', minWidth: 0 }}
      >
        <Typography sx={{ ...maxLine({ line: 2 }) }}>{content}</Typography>
      </ComponentBlock>

      <ComponentBlock
        title="3 Line"
        sx={{ flexDirection: 'column', alignItems: 'unset', minWidth: 0 }}
      >
        <Typography sx={{ ...maxLine({ line: 3 }) }}>{content}</Typography>
      </ComponentBlock>

      <ComponentBlock
        title="4 Line"
        sx={{ flexDirection: 'column', alignItems: 'unset', minWidth: 0 }}
      >
        <Typography sx={{ ...maxLine({ line: 3 }) }}>{content}</Typography>
      </ComponentBlock>

      <ComponentBlock
        title="As Link"
        sx={{ flexDirection: 'column', alignItems: 'unset', minWidth: 0 }}
      >
        <Link href="#" color="primary" sx={{ maxWidth: 300, ...maxLine({ line: 3 }) }}>
          {content}
        </Link>
      </ComponentBlock>

      <ComponentBlock
        title="Persistent"
        sx={{ flexDirection: 'column', alignItems: 'unset', minWidth: 0 }}
      >
        <Typography
          variant="h6"
          sx={{
            ...maxLine({ line: 3, persistent: theme.typography.h6 }),
            bgcolor: 'background.neutral',
          }}
        >
          Donec posuere vulputate arcu.
        </Typography>
      </ComponentBlock>
    </Stack>
  );
}
