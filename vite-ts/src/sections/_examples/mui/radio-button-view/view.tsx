import { useState } from 'react';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';

import { paths } from 'src/routes/paths';

import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { ComponentHero } from '../../component-hero';
import { ComponentBlock } from '../../component-block';
import { ScrollToViewTemplate } from '../../component-template';

// ----------------------------------------------------------------------

const COLORS = ['default', 'primary', 'secondary', 'info', 'success', 'warning', 'error'] as const;

const PLACEMENTS = ['top', 'start', 'bottom', 'end'] as const;

// ----------------------------------------------------------------------

export function RadioButtonView() {
  const [value, setValue] = useState('a1');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const DEMO = [
    {
      name: 'Basic',
      component: (
        <ComponentBlock>
          <FormControl component="fieldset">
            <RadioGroup row defaultValue="nn">
              <Radio size="medium" value="nn" />
              <Radio size="medium" value="gg" />
              <Radio size="medium" disabled value="hh" />
            </RadioGroup>
          </FormControl>
        </ComponentBlock>
      ),
    },
    {
      name: 'Sizes',
      component: (
        <ComponentBlock>
          <RadioGroup row defaultValue="g">
            <FormControlLabel value="g" control={<Radio size="medium" />} label="Normal" />
            <FormControlLabel value="p" control={<Radio size="small" />} label="Small" />
          </RadioGroup>
        </ComponentBlock>
      ),
    },
    {
      name: 'Placement',
      component: (
        <ComponentBlock>
          <FormControl component="fieldset">
            <RadioGroup row defaultValue="top">
              {PLACEMENTS.map((placement) => (
                <FormControlLabel
                  key={placement}
                  value={placement}
                  label={placement}
                  labelPlacement={placement}
                  control={<Radio size="medium" />}
                  sx={{ textTransform: 'capitalize' }}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </ComponentBlock>
      ),
    },
    {
      name: 'Colors',
      component: (
        <ComponentBlock>
          <FormControl component="fieldset">
            <RadioGroup value={value} onChange={handleChange}>
              {COLORS.map((color) => (
                <FormControlLabel
                  key={color}
                  value={color}
                  control={<Radio size="medium" color={color} />}
                  label={color}
                  sx={{ textTransform: 'capitalize' }}
                />
              ))}

              <FormControlLabel
                disabled
                value="a8"
                control={<Radio size="medium" color="error" />}
                label="Disabled"
              />
            </RadioGroup>
          </FormControl>
        </ComponentBlock>
      ),
    },
  ];

  return (
    <>
      <ComponentHero>
        <CustomBreadcrumbs
          heading="Radio Buttons"
          links={[{ name: 'Components', href: paths.components }, { name: 'Radio Buttons' }]}
          moreLink={['https://mui.com/components/radio-buttons']}
        />
      </ComponentHero>

      <ScrollToViewTemplate data={DEMO} />
    </>
  );
}
