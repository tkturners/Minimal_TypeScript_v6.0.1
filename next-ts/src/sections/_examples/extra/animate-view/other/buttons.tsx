import { m } from 'framer-motion';

import Fab from '@mui/material/Fab';
import IconButton from '@mui/material/IconButton';

import { Iconify } from 'src/components/iconify';
import { varHover } from 'src/components/animate';

// ----------------------------------------------------------------------

export function AnimateButton() {
  return (
    <>
      <Fab
        component={m.button}
        whileTap="tap"
        whileHover="hover"
        variants={varHover(1.1, 0.95)}
        color="primary"
        size="small"
      >
        <Iconify icon="mingcute:add-line" width={24} />
      </Fab>

      <Fab
        component={m.button}
        whileTap="tap"
        whileHover="hover"
        variants={varHover()}
        color="primary"
        size="medium"
      >
        <Iconify icon="mingcute:add-line" width={24} />
      </Fab>

      <Fab
        component={m.button}
        whileTap="tap"
        whileHover="hover"
        variants={varHover(1.08, 0.99)}
        color="primary"
      >
        <Iconify icon="mingcute:add-line" width={24} />
      </Fab>

      <IconButton
        component={m.button}
        whileTap="tap"
        whileHover="hover"
        variants={varHover(1.1, 0.95)}
        color="primary"
        size="small"
      >
        <Iconify icon="mingcute:add-line" width={24} />
      </IconButton>

      <IconButton
        component={m.button}
        whileTap="tap"
        whileHover="hover"
        variants={varHover()}
        color="primary"
      >
        <Iconify icon="mingcute:add-line" width={24} />
      </IconButton>

      <IconButton
        component={m.button}
        whileTap="tap"
        whileHover="hover"
        variants={varHover(1.08, 0.99)}
        color="primary"
        size="large"
      >
        <Iconify icon="mingcute:add-line" width={24} />
      </IconButton>
    </>
  );
}
