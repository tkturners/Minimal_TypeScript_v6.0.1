import type { TransitionProps } from '@mui/material/transitions';

import { forwardRef } from 'react';

import Slide from '@mui/material/Slide';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import { useBoolean } from 'src/hooks/use-boolean';

// ----------------------------------------------------------------------

const Transition = forwardRef(
  (
    props: TransitionProps & {
      children: React.ReactElement;
    },
    ref: React.Ref<unknown>
  ) => <Slide direction="up" ref={ref} {...props} />
);

export function TransitionsDialog() {
  const dialog = useBoolean();

  return (
    <div>
      <Button variant="outlined" color="success" onClick={dialog.onTrue}>
        Transitions dialogs
      </Button>

      <Dialog
        keepMounted
        open={dialog.value}
        TransitionComponent={Transition}
        onClose={dialog.onFalse}
      >
        <DialogTitle>{`Use Google's location service?`}</DialogTitle>

        <DialogContent sx={{ color: 'text.secondary' }}>
          Let Google help apps determine location. This means sending anonymous location data to
          Google, even when no apps are running.
        </DialogContent>

        <DialogActions>
          <Button variant="outlined" onClick={dialog.onFalse}>
            Disagree
          </Button>
          <Button variant="contained" onClick={dialog.onFalse} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
