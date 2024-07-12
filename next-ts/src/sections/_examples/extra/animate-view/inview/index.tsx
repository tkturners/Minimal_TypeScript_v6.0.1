import { useState, useCallback } from 'react';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';

import { useBoolean } from 'src/hooks/use-boolean';

import { Toolbar } from './toolbar';
import { ContainerView } from './container';
import { ControlPanel } from '../control-panel';

// ----------------------------------------------------------------------

export function AnimateInview() {
  const text = useBoolean();

  const multi = useBoolean();

  const [count, setCount] = useState(0);

  const [selectVariant, setSelectVariant] = useState('slideInUp');

  const handleRefresh = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const handleChangeVariant = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setCount(count + 1);
      setSelectVariant((event.target as HTMLInputElement).value);
    },
    [count]
  );

  return (
    <Card sx={{ height: 640, display: 'flex' }}>
      <Stack spacing={2.5} sx={{ p: 2.5, display: 'flex', flex: '1 1 auto' }}>
        <Toolbar
          isText={text.value}
          isMulti={multi.value}
          onChangeText={text.onToggle}
          onChangeMulti={multi.onToggle}
          onRefresh={handleRefresh}
        />
        <ContainerView
          key={count}
          isText={text.value}
          isMulti={multi.value}
          selectVariant={selectVariant}
        />
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
  { type: 'slide in', values: ['slideInUp', 'slideInDown', 'slideInLeft', 'slideInRight'] },
  { type: 'slide out', values: ['slideOutUp', 'slideOutDown', 'slideOutLeft', 'slideOutRight'] },
  { type: 'fade in', values: ['fadeIn', 'fadeInUp', 'fadeInDown', 'fadeInLeft', 'fadeInRight'] },
  {
    type: 'fade out',
    values: ['fadeOut', 'fadeOutUp', 'fadeOutDown', 'fadeOutLeft', 'fadeOutRight'],
  },
  { type: 'zoom in', values: ['zoomIn', 'zoomInUp', 'zoomInDown', 'zoomInLeft', 'zoomInRight'] },
  {
    type: 'zoom out',
    values: ['zoomOut', 'zoomOutUp', 'zoomOutDown', 'zoomOutLeft', 'zoomOutRight'],
  },
  {
    type: 'bounce in',
    values: ['bounceIn', 'bounceInUp', 'bounceInDown', 'bounceInLeft', 'bounceInRight'],
  },
  {
    type: 'bounce out',
    values: ['bounceOut', 'bounceOutUp', 'bounceOutDown', 'bounceOutLeft', 'bounceOutRight'],
  },
  { type: 'flip in', values: ['flipInX', 'flipInY'] },
  { type: 'flip out', values: ['flipOutX', 'flipOutY'] },
  { type: 'scale in', values: ['scaleInX', 'scaleInY'] },
  { type: 'scale out', values: ['scaleOutX', 'scaleOutY'] },
  { type: 'rotate in', values: ['rotateIn'] },
  { type: 'rotate out', values: ['rotateOut'] },
];
