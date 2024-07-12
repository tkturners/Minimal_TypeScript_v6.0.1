import type { MotionProps } from 'framer-motion';
import type { BoxProps } from '@mui/material/Box';
import type { Theme, SxProps, CSSObject } from '@mui/material/styles';

import { useId } from 'react';
import { m } from 'framer-motion';

import Box from '@mui/material/Box';

import { varFade } from 'src/components/animate';

// ----------------------------------------------------------------------

const baseStyles: CSSObject = {
  zIndex: 2,
  display: 'none',
  color: 'grey.500',
  position: 'absolute',
  '& line': { strokeDasharray: 3, stroke: 'currentColor' },
  '& path': { fill: 'currentColor', stroke: 'currentColor' },
  '@media (min-width: 1440px)': { display: 'block' },
};

const transition = { duration: 0.64, ease: [0.43, 0.13, 0.23, 0.96] };

// ----------------------------------------------------------------------

export function FloatLine({
  sx,
  vertical,
  ...other
}: BoxProps & {
  vertical?: boolean;
}) {
  return (
    <Box
      component={m.svg}
      sx={{
        ...baseStyles,
        zIndex: 1,
        width: '100%',
        height: '1px',
        opacity: 0.24,
        ...(vertical && { width: '1px', height: '100%' }),
        ...sx,
      }}
      {...other}
    >
      {vertical ? (
        <m.line
          x1="0.5"
          x2="0.5"
          y1="0"
          y2="100%"
          variants={{
            initial: { y2: '0%' },
            animate: { y2: '100%', transition },
          }}
        />
      ) : (
        <m.line
          x1="0"
          x2="100%"
          y1="0.5"
          y2="0.5"
          variants={{
            initial: { x2: '0%' },
            animate: { x2: '100%', transition },
          }}
        />
      )}
    </Box>
  );
}

// ----------------------------------------------------------------------

export function FloatPlusIcon({ sx, ...other }: BoxProps) {
  return (
    <Box
      component={m.svg}
      variants={{ initial: { scale: 0 }, animate: { scale: 1, transition } }}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      sx={{
        ...baseStyles,
        width: 16,
        height: 16,
        ...sx,
      }}
      {...other}
    >
      <path d="M8 0V16M16 8.08889H0" />
    </Box>
  );
}

// ----------------------------------------------------------------------

export function FloatXIcon({ sx, ...other }: BoxProps) {
  return (
    <Box
      component={m.svg}
      variants={{ initial: { scaleX: 0 }, animate: { scaleX: 1, transition } }}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      sx={{
        ...baseStyles,
        width: 16,
        height: 16,
        ...sx,
      }}
      {...other}
    >
      <path d="M14 2L7.96685 8.03315M7.96685 8.03315L2.0663 13.9337M7.96685 8.03315L13.9337 14M7.96685 8.03315L2 2.0663" />
    </Box>
  );
}

// ----------------------------------------------------------------------

export function FloatTriangleLeftIcon({ sx, ...other }: BoxProps) {
  return (
    <Box
      component={m.svg}
      variants={{ initial: { scaleY: 0 }, animate: { scaleY: 1, transition } }}
      width="10"
      height="20"
      viewBox="0 0 10 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      sx={{
        ...baseStyles,
        width: 10,
        height: 20,
        ...sx,
      }}
      {...other}
    >
      <path d="M10 10L8.74228e-07 20L0 0L10 10Z" />
    </Box>
  );
}

export function FloatTriangleDownIcon({ sx, ...other }: BoxProps) {
  return (
    <Box
      component={m.svg}
      variants={{ initial: { scaleX: 0 }, animate: { scaleX: 1, transition } }}
      width="20"
      height="10"
      viewBox="0 0 20 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      sx={{
        ...baseStyles,
        width: 20,
        height: 10,
        ...sx,
      }}
      {...other}
    >
      <path d="M10 10L0 0H20L10 10Z" />
    </Box>
  );
}

// ----------------------------------------------------------------------

export function FloatDotIcon({ sx, ...other }: BoxProps) {
  return (
    <Box
      component={m.span}
      variants={{ initial: { scale: 0 }, animate: { scale: 1, transition } }}
      sx={{
        ...baseStyles,
        width: 12,
        height: 12,
        borderRadius: '50%',
        bgcolor: 'currentColor',
        ...sx,
      }}
      {...other}
    />
  );
}

// ----------------------------------------------------------------------

export type Props = {
  sx?: SxProps<Theme>;
  variants?: MotionProps['variants'];
};

export function CircleSvg({ sx, variants }: Props) {
  const maskId = useId();
  const clipPathId = useId();
  const gradientId = useId();

  return (
    <Box
      component={m.svg}
      width="100%"
      height="100%"
      viewBox="0 0 560 560"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      variants={variants ?? varFade().in}
      sx={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        m: 'auto',
        width: 560,
        height: 560,
        color: 'grey.500',
        position: 'absolute',
        ...sx,
      }}
    >
      <defs>
        <radialGradient
          id={gradientId}
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(280 0 0 280 280 280)"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="1" stopOpacity={0} />
        </radialGradient>

        <clipPath id={clipPathId}>
          <path fill="#fff" d="M0 0H560V560H0z" />
        </clipPath>
      </defs>

      <g clipPath={`url(#${clipPathId})`}>
        <mask
          id={maskId}
          style={{ maskType: 'alpha' }}
          width="560"
          height="560"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
        >
          <path fill={`url(#${gradientId})`} d="M0 0H560V560H0z" />
        </mask>

        <g stroke="currentColor" strokeDasharray={3} mask={`url(#${maskId})`} opacity={0.4}>
          <circle cx="280" cy="280" r="90" />
          <circle cx="280" cy="280" r="180" />
          <path d="M0 0l560 560M560 0L0 560" />
        </g>
      </g>
    </Box>
  );
}
