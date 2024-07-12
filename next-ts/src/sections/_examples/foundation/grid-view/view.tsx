'use client';

import { useState } from 'react';

import Radio from '@mui/material/Radio';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import { paths } from 'src/routes/paths';

import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { ComponentHero } from '../../component-hero';
import { ComponentBlock, ComponentContainer } from '../../component-block';

// ----------------------------------------------------------------------

const LABELS = ['1col', '2col', '3col', '4col', '6col', '12col'];

// ----------------------------------------------------------------------

export function GridView() {
  const theme = useTheme();

  const [spacing, setSpacing] = useState<number>(2);

  const [column, setColumn] = useState<number>(3);

  const handleChangeSpacing = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSpacing(Number(event.target.value));
  };

  const handleChangeColumn = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColumn(Number(event.target.value));
  };

  return (
    <>
      <ComponentHero>
        <CustomBreadcrumbs
          heading="Grid"
          links={[{ name: 'Components', href: paths.components }, { name: 'Grid' }]}
        />
      </ComponentHero>

      <ComponentContainer>
        <ComponentBlock title="Spacing" sx={{ flexDirection: 'column', alignItems: 'unset' }}>
          <Typography variant="body2" sx={{ mb: 3, textAlign: 'center' }}>
            Spacing: <strong>{theme.spacing(Number(spacing))}</strong>
          </Typography>

          <Grid container spacing={spacing}>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((value) => (
              <Grid key={value} xs={1}>
                <Paper sx={{ height: 80, boxShadow: theme.customShadows.z8 }} />
              </Grid>
            ))}
          </Grid>

          <RadioGroup
            row
            name="spacing"
            value={spacing.toString()}
            onChange={handleChangeSpacing}
            sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}
          >
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
              <FormControlLabel
                key={value}
                value={value.toString()}
                label={value.toString()}
                control={<Radio />}
              />
            ))}
          </RadioGroup>
        </ComponentBlock>

        <ComponentBlock title="Column" sx={{ flexDirection: 'column', alignItems: 'unset' }}>
          <Grid container spacing={3}>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((value) => (
              <Grid key={value} xs={column}>
                <Paper sx={{ py: 3, textAlign: 'center', boxShadow: theme.customShadows.z8 }}>
                  xs = {column}
                </Paper>
              </Grid>
            ))}
          </Grid>

          <RadioGroup
            row
            name="column"
            value={column.toString()}
            onChange={handleChangeColumn}
            sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}
          >
            {[12, 6, 4, 3, 2, 1].map((value, index) => (
              <FormControlLabel
                key={value}
                value={value.toString()}
                label={LABELS[index]}
                control={<Radio />}
              />
            ))}
          </RadioGroup>
        </ComponentBlock>
      </ComponentContainer>
    </>
  );
}
