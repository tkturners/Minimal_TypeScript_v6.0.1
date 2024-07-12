import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import DialogTitle from '@mui/material/DialogTitle';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';

import { useBoolean } from 'src/hooks/use-boolean';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

const emails = ['username@gmail.com', 'user02@gmail.com'];

export function SimpleDialog() {
  const dialog = useBoolean();

  const [selectedValue, setSelectedValue] = useState(emails[1]);

  const handleClose = useCallback(
    (value: string) => {
      dialog.onFalse();
      setSelectedValue(value);
    },
    [dialog]
  );

  return (
    <>
      <Button variant="outlined" onClick={dialog.onTrue}>
        Open simple dialog
      </Button>

      <Typography variant="subtitle1">Selected: {selectedValue}</Typography>

      <Dialog open={dialog.value} onClose={() => handleClose(selectedValue)}>
        <DialogTitle>Set backup account</DialogTitle>

        <Box component="ul">
          {emails.map((email) => (
            <Box key={email} component="li" sx={{ display: 'flex' }}>
              <ListItemButton onClick={() => handleClose(email)}>
                <Avatar sx={{ mr: 2, color: 'info.lighter', bgcolor: 'info.darker' }}>
                  <Iconify icon="solar:user-rounded-bold" />
                </Avatar>
                <ListItemText primary={email} />
              </ListItemButton>
            </Box>
          ))}

          <Box component="li" sx={{ display: 'flex' }}>
            <ListItemButton autoFocus onClick={() => handleClose('addAccount')}>
              <Avatar sx={{ mr: 2 }}>
                <Iconify icon="mingcute:add-line" />
              </Avatar>
              <ListItemText primary="Add account" />
            </ListItemButton>
          </Box>
        </Box>
      </Dialog>
    </>
  );
}
