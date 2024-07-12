'use client';

import { useState } from 'react';

import Switch from '@mui/material/Switch';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';

import { paths } from 'src/routes/paths';

import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { ReactHookForm } from './react-hook-form';
import { ComponentHero } from '../../component-hero';
import { ComponentContainer } from '../../component-block';

// ----------------------------------------------------------------------

export function FormValidationView() {
  const [debug, setDebug] = useState(true);

  const handleChangeDebug = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDebug(event.target.checked);
  };

  return (
    <>
      <ComponentHero>
        <CustomBreadcrumbs
          heading="Form validation"
          links={[{ name: 'Components', href: paths.components }, { name: 'Form validation' }]}
          moreLink={['https://react-hook-form.com', 'https://zod.dev']}
        />
      </ComponentHero>

      <ComponentContainer maxWidth="xl" sx={{ position: 'relative' }}>
        <Typography variant="h4"> React hook form + Zod </Typography>
        <FormControlLabel
          control={<Switch name="switch-debug" checked={debug} onChange={handleChangeDebug} />}
          label="Show Debug"
          sx={{ alignSelf: 'flex-start' }}
        />

        <Divider sx={{ my: 5 }} />

        <ReactHookForm debug={debug} />
      </ComponentContainer>
    </>
  );
}
