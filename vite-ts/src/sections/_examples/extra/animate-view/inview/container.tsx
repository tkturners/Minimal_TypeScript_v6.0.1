import type { StackProps } from '@mui/material/Stack';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import { _mock } from 'src/_mock';

import { AnimateText, MotionContainer } from 'src/components/animate';

import { getVariant } from '../get-variant';

// ----------------------------------------------------------------------

const TEXT = 'Minimals';

const IMG = [
  _mock.image.cover(2),
  _mock.image.cover(3),
  _mock.image.cover(4),
  _mock.image.cover(5),
];

type Props = StackProps & {
  isText: boolean;
  isMulti: boolean;
  selectVariant: string;
};

export function ContainerView({ isText, isMulti, selectVariant, sx, ...other }: Props) {
  const items = isMulti ? IMG : IMG.slice(0, 1);

  const renderText = (
    <AnimateText
      component="h1"
      variant="h1"
      text={TEXT}
      variants={getVariant(selectVariant, 400)}
      sx={{ overflow: 'hidden' }}
    />
  );

  const renderItems = (
    <MotionContainer
      sx={{
        gap: 3,
        width: 1,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      {items.map((item, index) => (
        <Box
          key={index}
          component={m.img}
          src={item}
          variants={getVariant(selectVariant, 800)}
          sx={{
            width: 480,
            borderRadius: 1,
            objectFit: 'cover',
            height: isMulti ? 80 : 320,
            boxShadow: (theme) => theme.customShadows.z8,
          }}
        />
      ))}
    </MotionContainer>
  );

  return (
    <Stack
      sx={{
        borderRadius: 2,
        flex: '1 1 auto',
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.neutral',
        ...sx,
      }}
      {...other}
    >
      {isText ? renderText : renderItems}
    </Stack>
  );
}
