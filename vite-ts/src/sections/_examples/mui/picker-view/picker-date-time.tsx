import type { IDatePickerControl } from 'src/types/common';

import dayjs from 'dayjs';
import { useState } from 'react';

import Stack from '@mui/material/Stack';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { DesktopDateTimePicker } from '@mui/x-date-pickers/DesktopDateTimePicker';

import { ComponentBlock } from '../../component-block';

// ----------------------------------------------------------------------

export function PickerDateTime() {
  const [value, setValue] = useState<IDatePickerControl>(dayjs(new Date()));

  const [valueResponsive, setValueResponsive] = useState<IDatePickerControl>(
    dayjs('2018-01-01T00:00:00.000Z')
  );

  return (
    <Stack spacing={5}>
      <ComponentBlock title="Basic">
        <DateTimePicker
          label="DateTimePicker"
          value={value}
          onChange={setValue}
          slotProps={{ textField: { fullWidth: true } }}
        />
      </ComponentBlock>

      <ComponentBlock title="Responsiveness">
        <MobileDateTimePicker
          value={valueResponsive}
          onChange={(newValue) => {
            setValueResponsive(newValue);
          }}
          slotProps={{ textField: { fullWidth: true } }}
        />

        <DesktopDateTimePicker
          value={valueResponsive}
          onChange={(newValue) => {
            setValueResponsive(newValue);
          }}
          slotProps={{ textField: { fullWidth: true } }}
        />

        <DateTimePicker
          value={valueResponsive}
          onChange={(newValue) => {
            setValueResponsive(newValue);
          }}
          slotProps={{ textField: { fullWidth: true } }}
        />
      </ComponentBlock>
    </Stack>
  );
}
