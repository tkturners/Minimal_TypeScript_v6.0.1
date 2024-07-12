import type { StackProps } from '@mui/material/Stack';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import IconButton from '@mui/material/IconButton';
import FormControlLabel from '@mui/material/FormControlLabel';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

type ToolbarProps = StackProps & {
  isText: boolean;
  isMulti: boolean;
  onChangeText: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeMulti: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onRefresh: () => void;
};

export function Toolbar({
  isText,
  isMulti,
  onChangeText,
  onChangeMulti,
  onRefresh,
  ...other
}: ToolbarProps) {
  return (
    <Stack direction="row" alignItems="center" {...other}>
      <FormControlLabel
        control={<Switch checked={isText} onChange={onChangeText} />}
        label="Text object"
      />

      <Box sx={{ flexGrow: 1 }} />

      {!isText && (
        <FormControlLabel
          control={<Switch checked={isMulti} onChange={onChangeMulti} />}
          label="Multiitem"
        />
      )}

      <IconButton onClick={onRefresh}>
        <Iconify icon="eva:refresh-fill" />
      </IconButton>
    </Stack>
  );
}
