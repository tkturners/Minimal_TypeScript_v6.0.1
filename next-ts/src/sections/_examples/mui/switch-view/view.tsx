'use client';

import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
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

export function SwitchView() {
  const DEMO = [
    {
      name: 'Basic',
      component: (
        <ComponentBlock>
          <Switch name="basic-1" defaultChecked />
          <Switch name="basic-2" />
          <Switch name="basic-3" disabled />
          <Switch name="basic-4" disabled checked />
          <Switch name="basic-5" defaultChecked color="default" />
        </ComponentBlock>
      ),
    },
    {
      name: 'Sizes',
      component: (
        <ComponentBlock>
          <FormGroup row>
            <FormControlLabel control={<Switch name="small" size="small" />} label="Small" />
            <FormControlLabel control={<Switch name="normal" />} label="Normal" />
          </FormGroup>
        </ComponentBlock>
      ),
    },
    {
      name: 'Placement',
      component: (
        <ComponentBlock>
          <FormGroup row>
            {PLACEMENTS.map((placement) => (
              <FormControlLabel
                key={placement}
                value={placement}
                label={placement}
                labelPlacement={placement}
                control={<Switch name={placement} />}
                sx={{ textTransform: 'capitalize' }}
              />
            ))}
          </FormGroup>
        </ComponentBlock>
      ),
    },
    {
      name: 'Colors',
      component: (
        <ComponentBlock>
          <FormControl component="fieldset">
            <FormGroup>
              {COLORS.map((color) => (
                <FormControlLabel
                  key={color}
                  control={<Switch defaultChecked name={color} color={color} />}
                  label={color}
                  sx={{ textTransform: 'capitalize' }}
                />
              ))}

              <FormControlLabel
                disabled
                control={<Switch name="error-disabled" color="error" />}
                label="Disabled"
              />
            </FormGroup>
          </FormControl>
        </ComponentBlock>
      ),
    },
  ];

  return (
    <>
      <ComponentHero>
        <CustomBreadcrumbs
          heading="Switch"
          links={[{ name: 'Components', href: paths.components }, { name: 'Switch' }]}
          moreLink={['https://mui.com/components/switches']}
        />
      </ComponentHero>

      <ScrollToViewTemplate data={DEMO} />
    </>
  );
}
