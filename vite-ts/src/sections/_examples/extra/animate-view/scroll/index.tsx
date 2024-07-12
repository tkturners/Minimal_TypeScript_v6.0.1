import { useState, useCallback } from 'react';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';

import { Toolbar } from './toolbar';
import { ContainerView } from './container';
import { ControlPanel } from '../control-panel';

// ----------------------------------------------------------------------

export function AnimateScroll() {
  const [count, setCount] = useState(0);

  const [selectVariant, setSelectVariant] = useState('slideInUp');

  const handleChangeVariant = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setCount(count + 1);
      setSelectVariant(event.target.value);
    },
    [count]
  );

  return (
    <Card sx={{ height: 640, display: 'flex' }}>
      <Stack spacing={2.5} sx={{ p: 2.5, display: 'flex', flex: '1 1 auto' }}>
        <Toolbar onRefresh={() => setCount(count + 1)} />
        <ContainerView key={count} selectVariant={selectVariant} />
      </Stack>

      <ControlPanel
        variantKey={VARIANT_KEYS}
        selectVariant={selectVariant}
        onChangeVariant={handleChangeVariant}
      />
    </Card>
  );
}

// ----------------------------------------------------------------------

const VARIANT_KEYS = [
  { type: 'slide', values: ['slideInUp', 'slideInDown', 'slideInLeft', 'slideInRight'] },
  { type: 'fade', values: ['fadeIn', 'fadeInUp', 'fadeInDown', 'fadeInLeft', 'fadeInRight'] },
  { type: 'zoom', values: ['zoomIn', 'zoomInUp', 'zoomInDown', 'zoomInLeft', 'zoomInRight'] },
  {
    type: 'bounce',
    values: ['bounceIn', 'bounceInUp', 'bounceInDown', 'bounceInLeft', 'bounceInRight'],
  },
  { type: 'flip', values: ['flipInX', 'flipInY'] },
  { type: 'scale', values: ['scaleInX', 'scaleInY'] },
  { type: 'rotate', values: ['rotateIn'] },
];
