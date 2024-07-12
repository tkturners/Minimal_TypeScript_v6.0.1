import type { StackProps } from '@mui/material/Stack';

import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

type Props = StackProps & {
  onRefresh: () => void;
};

export function Toolbar({ onRefresh, ...other }: Props) {
  return (
    <Stack direction="row" alignItems="center" justifyContent="flex-end" {...other}>
      <IconButton onClick={onRefresh}>
        <Iconify icon="eva:refresh-fill" />
      </IconButton>
    </Stack>
  );
}
