import type { DialogProps } from '@mui/material/Dialog';

import { useRef, useState, useEffect, useCallback } from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

import { useBoolean } from 'src/hooks/use-boolean';

// ----------------------------------------------------------------------

export function ScrollDialog() {
  const dialog = useBoolean();

  const [scroll, setScroll] = useState<DialogProps['scroll']>('paper');

  const handleClickOpen = useCallback(
    (scrollType: DialogProps['scroll']) => () => {
      dialog.onTrue();
      setScroll(scrollType);
    },
    [dialog]
  );

  const descriptionElementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (dialog.value) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement) {
        descriptionElement.focus();
      }
    }
  }, [dialog.value]);

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen('paper')} sx={{ mr: 2 }}>
        scroll=paper
      </Button>

      <Button variant="outlined" onClick={handleClickOpen('body')}>
        scroll=body
      </Button>

      <Dialog open={dialog.value} onClose={dialog.onFalse} scroll={scroll}>
        <DialogTitle sx={{ pb: 2 }}>Subscribe</DialogTitle>

        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText ref={descriptionElementRef} tabIndex={-1}>
            {[...new Array(50)]
              .map(
                () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
              )
              .join('\n')}
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={dialog.onFalse}>Cancel</Button>

          <Button variant="contained" onClick={dialog.onFalse}>
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
