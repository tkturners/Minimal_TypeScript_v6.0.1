import type { FabProps } from '@mui/material/Fab';

import { useState } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';

import Fab from '@mui/material/Fab';
import SvgIcon from '@mui/material/SvgIcon';

// ----------------------------------------------------------------------

export type BackToTopProps = FabProps & {
  value?: number;
};

export function BackToTop({ value = 90, sx, ...other }: BackToTopProps) {
  const { scrollYProgress } = useScroll();

  const [show, setShow] = useState<boolean>(false);

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const isEnd = Math.floor(latest * 100) > value; // unit is %
    setShow(isEnd);
  });

  return (
    <Fab
      aria-label="Back to top"
      onClick={backToTop}
      sx={{
        width: 48,
        height: 48,
        position: 'fixed',
        transform: 'scale(0)',
        right: { xs: 24, md: 32 },
        bottom: { xs: 24, md: 32 },
        zIndex: (theme) => theme.zIndex.speedDial,
        transition: (theme) => theme.transitions.create(['transform']),
        ...(show && { transform: 'scale(1)' }),
        ...sx,
      }}
      {...other}
    >
      <SvgIcon>
        {/* https://icon-sets.iconify.design/solar/double-alt-arrow-up-bold-duotone/ */}
        <path
          fill="currentColor"
          d="M5 17.75a.75.75 0 0 1-.488-1.32l7-6a.75.75 0 0 1 .976 0l7 6A.75.75 0 0 1 19 17.75z"
          opacity="0.5"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M4.43 13.488a.75.75 0 0 0 1.058.081L12 7.988l6.512 5.581a.75.75 0 1 0 .976-1.138l-7-6a.75.75 0 0 0-.976 0l-7 6a.75.75 0 0 0-.081 1.057"
          clipRule="evenodd"
        />
      </SvgIcon>
    </Fab>
  );
}
