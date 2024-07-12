import type { IDatePickerControl } from 'src/types/common';

import dayjs from 'dayjs';
import { useState } from 'react';

import Stack from '@mui/material/Stack';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';
import { DesktopTimePicker } from '@mui/x-date-pickers/DesktopTimePicker';

import { ComponentBlock } from '../../component-block';

// ----------------------------------------------------------------------

export function PickerTime() {
  const [value, setValue] = useState<IDatePickerControl>(dayjs(new Date()));

  return (
    <Stack spacing={3}>
      <ComponentBlock title="Basic">
        <TimePicker
          label="12 hours"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          slotProps={{ textField: { fullWidth: true } }}
        />
        <TimePicker
          ampm={false}
          label="24 hours"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          slotProps={{ textField: { fullWidth: true } }}
        />
      </ComponentBlock>

      <ComponentBlock title="Responsiveness">
        <MobileTimePicker
          orientation="portrait"
          label="For mobile"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          slotProps={{ textField: { fullWidth: true } }}
        />
        <DesktopTimePicker
          label="For desktop"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          slotProps={{ textField: { fullWidth: true } }}
        />
        <TimePicker
          value={value}
          onChange={setValue}
          slotProps={{ textField: { fullWidth: true } }}
        />
      </ComponentBlock>

      <ComponentBlock title="Static mode">
        <StaticTimePicker
          orientation="portrait"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
        />
        <StaticTimePicker
          ampm
          orientation="landscape"
          openTo="minutes"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
        />
      </ComponentBlock>
    </Stack>
  );
}
