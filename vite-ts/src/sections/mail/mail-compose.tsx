import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Portal from '@mui/material/Portal';
import Backdrop from '@mui/material/Backdrop';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { useBoolean } from 'src/hooks/use-boolean';
import { useResponsive } from 'src/hooks/use-responsive';

import { varAlpha } from 'src/theme/styles';

import { Editor } from 'src/components/editor';
import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

const POSITION = 20;

type Props = {
  onCloseCompose: () => void;
};

export function MailCompose({ onCloseCompose }: Props) {
  const smUp = useResponsive('up', 'sm');

  const fullScreen = useBoolean();

  const [message, setMessage] = useState('');

  const handleChangeMessage = useCallback((value: string) => {
    setMessage(value);
  }, []);

  return (
    <Portal>
      {(fullScreen.value || !smUp) && (
        <Backdrop open sx={{ zIndex: (theme) => theme.zIndex.modal - 1 }} />
      )}

      <Paper
        sx={{
          maxWidth: 560,
          right: POSITION,
          borderRadius: 2,
          display: 'flex',
          bottom: POSITION,
          position: 'fixed',
          overflow: 'hidden',
          flexDirection: 'column',
          zIndex: (theme) => theme.zIndex.modal,
          width: `calc(100% - ${POSITION * 2}px)`,
          boxShadow: (theme) => theme.customShadows.dropdown,
          ...(fullScreen.value && {
            maxWidth: 1,
            height: `calc(100% - ${POSITION * 2}px)`,
          }),
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          sx={{ bgcolor: 'background.neutral', p: (theme) => theme.spacing(1.5, 1, 1.5, 2) }}
        >
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            New message
          </Typography>

          <IconButton onClick={fullScreen.onToggle}>
            <Iconify icon={fullScreen.value ? 'eva:collapse-fill' : 'eva:expand-fill'} />
          </IconButton>

          <IconButton onClick={onCloseCompose}>
            <Iconify icon="mingcute:close-line" />
          </IconButton>
        </Stack>

        <InputBase
          placeholder="To"
          endAdornment={
            <Stack direction="row" spacing={0.5} sx={{ typography: 'subtitle2' }}>
              <Box sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}>Cc</Box>
              <Box sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}>Bcc</Box>
            </Stack>
          }
          sx={{
            px: 2,
            height: 48,
            borderBottom: (theme) =>
              `solid 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.08)}`,
          }}
        />

        <InputBase
          placeholder="Subject"
          sx={{
            px: 2,
            height: 48,
            borderBottom: (theme) =>
              `solid 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.08)}`,
          }}
        />

        <Stack
          spacing={2}
          flexGrow={1}
          sx={{
            p: 2,
            flex: '1 1 auto',
            overflow: 'hidden',
          }}
        >
          <Editor
            value={message}
            onChange={handleChangeMessage}
            placeholder="Type a message"
            slotProps={{
              wrap: {
                ...(fullScreen.value && { minHeight: 0, flex: '1 1 auto' }),
              },
            }}
            sx={{
              maxHeight: 480,
              ...(fullScreen.value && { maxHeight: 1, flex: '1 1 auto' }),
            }}
          />

          <Stack direction="row" alignItems="center">
            <Stack direction="row" alignItems="center" flexGrow={1}>
              <IconButton>
                <Iconify icon="solar:gallery-add-bold" />
              </IconButton>

              <IconButton>
                <Iconify icon="eva:attach-2-fill" />
              </IconButton>
            </Stack>

            <Button
              variant="contained"
              color="primary"
              endIcon={<Iconify icon="iconamoon:send-fill" />}
            >
              Send
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </Portal>
  );
}
