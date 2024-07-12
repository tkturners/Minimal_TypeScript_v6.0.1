import { useState, useCallback } from 'react';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';

import { useBoolean } from 'src/hooks/use-boolean';

import { ContainerView } from './container';
import { ControlPanel } from '../control-panel';

// ----------------------------------------------------------------------

export function AnimateDialog() {
  const view = useBoolean();

  const [selectVariant, setSelectVariant] = useState('slideInUp');

  const handleChangeVariant = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectVariant(event.target.value);
  }, []);

  return (
    <Card sx={{ height: 640, display: 'flex' }}>
      <Stack spacing={2.5} sx={{ p: 2.5, display: 'flex', flex: '1 1 auto' }}>
        <ContainerView
          open={view.value}
          onOpen={view.onTrue}
          onClose={view.onFalse}
          selectVariant={selectVariant}
        />
      </Stack>

      <ControlPanel
        variantKey={variantKey}
        selectVariant={selectVariant}
        onChangeVariant={handleChangeVariant}
      />
    </Card>
  );
}

// ----------------------------------------------------------------------

const variantKey = [
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
