import type { StackProps } from '@mui/material/Stack';

import { useRef } from 'react';
import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { varContainer, MotionViewport } from 'src/components/animate';

import { getVariant } from '../get-variant';

// ----------------------------------------------------------------------

type Props = StackProps & {
  selectVariant: string;
};

export function ContainerView({ selectVariant, sx, ...other }: Props) {
  const scrollRef = useRef(null);

  return (
    <Stack
      ref={scrollRef}
      component={m.div}
      variants={varContainer()}
      sx={{
        py: 5,
        gap: 3,
        borderRadius: 2,
        flex: '1 1 auto',
        overflowX: 'auto',
        bgcolor: 'background.neutral',
        ...sx,
      }}
      {...other}
    >
      <>
        {[...Array(40)].map((_, index) => (
          <Box
            key={index}
            component={MotionViewport}
            variants={getVariant(selectVariant)}
            viewport={{ root: scrollRef, once: true, amount: 0.1 }}
            sx={{
              py: 4,
              width: 1,
              mx: 'auto',
              maxWidth: 480,
              flexShrink: 0,
              borderRadius: 1,
              textAlign: 'center',
              bgcolor: 'background.paper',
              boxShadow: (theme) => theme.customShadows.z8,
            }}
          >
            <Typography variant="body2">Item {index + 1}</Typography>
          </Box>
        ))}
      </>
    </Stack>
  );
}
