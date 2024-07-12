import type { StackProps } from '@mui/material/Stack';

import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

type Props = StackProps & {
  onOpenNav: () => void;
  onOpenMail?: () => void;
};

export function MailHeader({ onOpenNav, onOpenMail, sx, ...other }: Props) {
  return (
    <Stack direction="row" alignItems="center" sx={{ py: 1, mb: 1, ...sx }} {...other}>
      <IconButton onClick={onOpenNav}>
        <Iconify icon="fluent:mail-24-filled" />
      </IconButton>

      {onOpenMail && (
        <IconButton onClick={onOpenMail}>
          <Iconify icon="solar:chat-round-dots-bold" />
        </IconButton>
      )}

      <TextField
        fullWidth
        size="small"
        placeholder="Search..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled' }} />
            </InputAdornment>
          ),
        }}
        sx={{ ml: 2 }}
      />
    </Stack>
  );
}
