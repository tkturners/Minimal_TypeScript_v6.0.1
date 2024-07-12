'use client';

import Tooltip from '@mui/material/Tooltip';

import { paths } from 'src/routes/paths';

import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';
import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { ComponentHero } from '../../component-hero';
import { ComponentBlock } from '../../component-block';
import { ScrollToViewTemplate } from '../../component-template';

// ----------------------------------------------------------------------

const COLORS = ['default', 'primary', 'secondary', 'info', 'success', 'warning', 'error'] as const;

// ----------------------------------------------------------------------

export function LabelView() {
  const DEMO = [
    {
      name: 'Filled',
      component: (
        <ComponentBlock sx={{ gap: 1 }}>
          {COLORS.map((color) => (
            <Tooltip key={color} title={color}>
              <Label color={color} variant="filled">
                {color}
              </Label>
            </Tooltip>
          ))}
        </ComponentBlock>
      ),
    },
    {
      name: 'Outlined',
      component: (
        <ComponentBlock sx={{ gap: 1 }}>
          {COLORS.map((color) => (
            <Label key={color} color={color} variant="outlined">
              {color}
            </Label>
          ))}
        </ComponentBlock>
      ),
    },
    {
      name: 'Soft',
      component: (
        <ComponentBlock sx={{ gap: 1 }}>
          {COLORS.map((color) => (
            <Label key={color} color={color} variant="soft">
              {color}
            </Label>
          ))}
        </ComponentBlock>
      ),
    },
    {
      name: 'Inverted',
      component: (
        <ComponentBlock sx={{ gap: 1 }}>
          {COLORS.map((color) => (
            <Label key={color} color={color} variant="inverted">
              {color}
            </Label>
          ))}
        </ComponentBlock>
      ),
    },
    {
      name: 'With icon',
      component: (
        <ComponentBlock sx={{ gap: 1 }}>
          <Label
            variant="filled"
            color="primary"
            startIcon={<Iconify icon="fluent:mail-24-filled" />}
          >
            Start icon
          </Label>

          <Label
            variant="filled"
            color="primary"
            endIcon={<Iconify icon="fluent:mail-24-filled" />}
          >
            End icon
          </Label>

          <Label
            variant="outlined"
            color="primary"
            startIcon={<Iconify icon="fluent:mail-24-filled" />}
          >
            Start icon
          </Label>

          <Label
            variant="outlined"
            color="primary"
            endIcon={<Iconify icon="fluent:mail-24-filled" />}
          >
            End icon
          </Label>

          <Label color="primary" startIcon={<Iconify icon="fluent:mail-24-filled" />}>
            Start icon
          </Label>

          <Label color="primary" endIcon={<Iconify icon="fluent:mail-24-filled" />}>
            End icon
          </Label>
        </ComponentBlock>
      ),
    },
  ];

  return (
    <>
      <ComponentHero>
        <CustomBreadcrumbs
          heading="Label"
          links={[{ name: 'Components', href: paths.components }, { name: 'Label' }]}
        />
      </ComponentHero>

      <ScrollToViewTemplate data={DEMO} />
    </>
  );
}
