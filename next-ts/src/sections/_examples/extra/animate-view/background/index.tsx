import { useState } from 'react';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';

import { Toolbar } from './toolbar';
import { ContainerView } from './container';
import { ControlPanel } from '../control-panel';

// ----------------------------------------------------------------------

export function AnimateBackground() {
  const [count, setCount] = useState(0);

  const [selectVariant, setSelectVariant] = useState('kenburnsTop');

  const handleChangeVariant = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCount(count + 1);
    setSelectVariant(event.target.value);
  };

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
  { type: 'kenburns', values: ['kenburnsTop', 'kenburnsBottom', 'kenburnsLeft', 'kenburnsRight'] },
  { type: 'pan', values: ['panTop', 'panBottom', 'panLeft', 'panRight'] },
  { type: 'color change', values: ['color2x', 'color3x', 'color4x', 'color5x'] },
];
