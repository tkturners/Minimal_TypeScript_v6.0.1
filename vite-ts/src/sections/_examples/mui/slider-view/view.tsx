import { useState } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider, { sliderClasses } from '@mui/material/Slider';

import { paths } from 'src/routes/paths';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { ComponentHero } from '../../component-hero';
import { ComponentBlock } from '../../component-block';
import { ScrollToViewTemplate } from '../../component-template';

// ----------------------------------------------------------------------

const COLORS = ['inherit', 'primary', 'secondary', 'error', 'info', 'success', 'warning'] as const;

const marks = [
  { value: 0, label: '0°C' },
  { value: 20, label: '20°C' },
  { value: 37, label: '37°C' },
  { value: 100, label: '100°C' },
];

const prices = [
  { value: 0, label: '$0' },
  { value: 25, label: '250' },
  { value: 50, label: '500' },
  { value: 75, label: '750' },
  { value: 100, label: '1000' },
];

// ----------------------------------------------------------------------

function valuePrice(value: number) {
  return value > 0 ? `$${value}0` : `${value}`;
}

function valueLabelFormatPrice(value: number) {
  return value > 0 ? `$${value}` : value;
}

function valuetext(value: number) {
  return `$${value}°C`;
}

function valueLabelFormat(value: number) {
  return marks.findIndex((mark) => mark.value === value) + 1;
}

// ----------------------------------------------------------------------

export function SliderView() {
  const [value, setValue] = useState<number>(30);

  const [price, setPrice] = useState<number[]>([20, 37]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  const handleChangePrice = (event: Event, newValue: number | number[]) => {
    setPrice(newValue as number[]);
  };

  const DEMO = [
    {
      name: 'Volume',
      component: (
        <ComponentBlock>
          <Stack direction="row" alignItems="center" spacing={1} width={1}>
            <Iconify icon="eva:volume-mute-fill" width={24} />
            <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
            <Iconify icon="eva:volume-up-fill" width={24} />
          </Stack>
        </ComponentBlock>
      ),
    },
    {
      name: 'Disabled',
      component: (
        <ComponentBlock>
          <Slider disabled defaultValue={30} />
        </ComponentBlock>
      ),
    },
    {
      name: 'Temperature',
      component: (
        <ComponentBlock>
          <Slider
            defaultValue={30}
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            step={10}
            marks
            min={10}
            max={110}
            sx={{ [`& .${sliderClasses.mark}[data-index="10"]`]: { display: 'none' } }}
          />
        </ComponentBlock>
      ),
    },
    {
      name: 'Sizes',
      component: (
        <ComponentBlock>
          <Slider
            size="medium"
            marks
            min={10}
            step={10}
            max={110}
            defaultValue={30}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            sx={{ [`& .${sliderClasses.mark}[data-index="10"]`]: { display: 'none' } }}
          />
          <Slider
            size="small"
            marks
            min={10}
            step={10}
            max={110}
            defaultValue={30}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            sx={{ [`& .${sliderClasses.mark}[data-index="10"]`]: { display: 'none' } }}
          />
        </ComponentBlock>
      ),
    },
    {
      name: 'Small steps',
      component: (
        <ComponentBlock>
          <Slider
            defaultValue={0.00000005}
            getAriaValueText={valuetext}
            step={0.00000001}
            marks
            min={-0.00000005}
            max={0.0000001}
            valueLabelDisplay="auto"
          />
        </ComponentBlock>
      ),
    },
    {
      name: 'Custom marks',
      component: (
        <ComponentBlock>
          <Slider
            defaultValue={20}
            getAriaValueText={valuetext}
            step={10}
            valueLabelDisplay="auto"
            marks={marks}
            sx={{ [`& .${sliderClasses.mark}[data-index="3"]`]: { display: 'none' } }}
          />
        </ComponentBlock>
      ),
    },
    {
      name: 'Restricted values',
      component: (
        <ComponentBlock>
          <Slider
            defaultValue={20}
            valueLabelFormat={valueLabelFormat}
            getAriaValueText={valuetext}
            step={null}
            valueLabelDisplay="auto"
            marks={marks}
            sx={{ [`& .${sliderClasses.mark}[data-index="3"]`]: { display: 'none' } }}
          />
        </ComponentBlock>
      ),
    },
    {
      name: 'Range',
      component: (
        <ComponentBlock sx={{ gap: 8, flexDirection: 'column' }}>
          <Slider
            scale={(x) => x * 10}
            step={10}
            marks={prices}
            value={price}
            onChange={handleChangePrice}
            valueLabelDisplay="on"
            getAriaValueText={valuePrice}
            valueLabelFormat={valueLabelFormatPrice}
            sx={{ [`& .${sliderClasses.mark}[data-index="4"]`]: { display: 'none' } }}
          />

          <Stack
            spacing={5}
            direction="row"
            sx={{
              p: 2,
              borderRadius: 1,
              typography: 'subtitle2',
              bgcolor: (theme) => varAlpha(theme.vars.palette.grey['500Channel'], 0.12),
            }}
          >
            <Box component="span">Min: {valuePrice(price[0])}</Box>
            <Box component="span">Max: {valuePrice(price[1])}</Box>
          </Stack>
        </ComponentBlock>
      ),
    },
    {
      name: 'Color',
      component: (
        <ComponentBlock sx={{ flexDirection: 'column' }}>
          {COLORS.map((color) => (
            <Slider
              key={color}
              color={color}
              marks
              min={10}
              step={10}
              max={110}
              defaultValue={30}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              sx={{ [`& .${sliderClasses.mark}[data-index="10"]`]: { display: 'none' } }}
            />
          ))}
        </ComponentBlock>
      ),
    },
  ];

  return (
    <>
      <ComponentHero>
        <CustomBreadcrumbs
          heading="Slider"
          links={[{ name: 'Components', href: paths.components }, { name: 'Slider' }]}
          moreLink={['https://mui.com/components/slider']}
        />
      </ComponentHero>

      <ScrollToViewTemplate data={DEMO} />
    </>
  );
}
