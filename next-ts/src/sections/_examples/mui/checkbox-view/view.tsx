'use client';

import { useState } from 'react';

import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';

import { paths } from 'src/routes/paths';

import { Iconify } from 'src/components/iconify';
import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { ComponentHero } from '../../component-hero';
import { ComponentBlock } from '../../component-block';
import { ScrollToViewTemplate } from '../../component-template';

// ----------------------------------------------------------------------

const COLORS = ['default', 'primary', 'secondary', 'info', 'success', 'warning', 'error'] as const;

const PLACEMENTS = ['top', 'start', 'bottom', 'end'] as const;

// ----------------------------------------------------------------------

export function CheckboxView() {
  const [checked, setChecked] = useState([true, false]);

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], event.target.checked]);
  };

  const DEMO = [
    {
      name: 'Basic',
      component: (
        <ComponentBlock>
          <Checkbox size="medium" />
          <Checkbox size="medium" defaultChecked />
          <Checkbox size="medium" defaultChecked indeterminate />
          <Checkbox size="medium" disabled />
          <Checkbox size="medium" disabled defaultChecked />
          <Checkbox size="medium" disabled indeterminate />
        </ComponentBlock>
      ),
    },
    {
      name: 'Size & custom icon',
      component: (
        <ComponentBlock>
          <FormControlLabel label="Normal" control={<Checkbox size="medium" defaultChecked />} />
          <FormControlLabel label="Small" control={<Checkbox size="small" defaultChecked />} />
          <FormControlLabel
            control={
              <Checkbox
                color="info"
                size="small"
                icon={<Iconify icon="solar:heart-bold" />}
                checkedIcon={<Iconify icon="solar:heart-bold" />}
                inputProps={{ id: 'favorite-checkbox' }}
              />
            }
            label="Custom icon"
          />

          <FormControlLabel
            control={
              <Checkbox
                color="error"
                size="small"
                icon={<Iconify icon="eva:award-fill" />}
                checkedIcon={<Iconify icon="eva:award-fill" />}
                inputProps={{ id: 'award-checkbox' }}
              />
            }
            label="Custom icon"
          />
        </ComponentBlock>
      ),
    },
    {
      name: 'Placement',
      component: (
        <ComponentBlock>
          <FormControl component="fieldset">
            <FormGroup aria-label="position" row>
              {PLACEMENTS.map((placement) => (
                <FormControlLabel
                  key={placement}
                  value={placement}
                  label={placement}
                  labelPlacement={placement}
                  control={<Checkbox size="medium" />}
                  sx={{ textTransform: 'capitalize' }}
                />
              ))}
            </FormGroup>
          </FormControl>
        </ComponentBlock>
      ),
    },
    {
      name: 'Colors',
      component: (
        <ComponentBlock>
          <FormGroup>
            {COLORS.map((color) => (
              <FormControlLabel
                key={color}
                control={<Checkbox size="medium" defaultChecked color={color} />}
                label={color}
                sx={{ textTransform: 'capitalize' }}
              />
            ))}

            <FormControlLabel
              disabled
              control={<Checkbox size="medium" defaultChecked color="error" />}
              label="Disabled"
            />
          </FormGroup>

          <FormControl component="fieldset">
            <FormGroup>
              {COLORS.map((color) => (
                <FormControlLabel
                  key={color}
                  control={<Checkbox size="medium" defaultChecked indeterminate color={color} />}
                  label={color}
                  sx={{ textTransform: 'capitalize' }}
                />
              ))}

              <FormControlLabel
                disabled
                control={<Checkbox size="medium" defaultChecked indeterminate color="error" />}
                label="Disabled"
              />
            </FormGroup>
          </FormControl>
        </ComponentBlock>
      ),
    },
    {
      name: 'Indeterminate',
      component: (
        <ComponentBlock>
          <div>
            <FormControlLabel
              label="Parent"
              control={
                <Checkbox
                  size="medium"
                  checked={checked[0] && checked[1]}
                  indeterminate={checked[0] !== checked[1]}
                  onChange={handleChange1}
                />
              }
            />
            <div>
              <FormControlLabel
                label="Child 1"
                control={<Checkbox size="medium" checked={checked[0]} onChange={handleChange2} />}
              />
              <FormControlLabel
                label="Child 2"
                control={<Checkbox size="medium" checked={checked[1]} onChange={handleChange3} />}
              />
            </div>
          </div>
        </ComponentBlock>
      ),
    },
  ];

  return (
    <>
      <ComponentHero>
        <CustomBreadcrumbs
          heading="Checkboxes"
          links={[{ name: 'Components', href: paths.components }, { name: 'Checkboxes' }]}
          moreLink={['https://mui.com/components/checkboxes']}
        />
      </ComponentHero>

      <ScrollToViewTemplate data={DEMO} />
    </>
  );
}
