import type { Dayjs } from 'dayjs';
import type { LanguageValue } from 'src/locales';
import type { PaperProps } from '@mui/material/Paper';

import dayjs from 'dayjs';
import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import RadioGroup from '@mui/material/RadioGroup';
import TablePagination from '@mui/material/TablePagination';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import FormControlLabel from '@mui/material/FormControlLabel';

import { paths } from 'src/routes/paths';

import { fDate } from 'src/utils/format-time';
import { fData, fNumber, fPercent, fCurrency, fShortenNumber } from 'src/utils/format-number';

import { allLangs, useTranslate } from 'src/locales';

import { FlagIcon } from 'src/components/iconify';
import { NavSectionVertical } from 'src/components/nav-section';
import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { ComponentHero } from '../../component-hero';
import { navData as clientNavData } from './config-nav';
import { ScrollToViewTemplate } from '../../component-template';

// ----------------------------------------------------------------------

const StyledPaper = styled((props: PaperProps) => <Paper variant="outlined" {...props} />)(
  ({ theme }) => ({
    ...theme.typography.body2,
    display: 'flex',
    gap: theme.spacing(1),
    flexDirection: 'column',
    padding: theme.spacing(3),
    borderRadius: theme.shape.borderRadius * 2,
  })
);

// ----------------------------------------------------------------------

export function MultiLanguageView() {
  const { t, onChangeLang, currentLang } = useTranslate();

  const [date, setDate] = useState<Dayjs | null>(dayjs('2022-04-17'));

  const [page, setPage] = useState(2);

  const [rowsPerPage, setRowsPerPage] = useState(10);

  const { t: tnav } = useTranslate('navbar');

  const navData = clientNavData(tnav);

  const handleChangePage = useCallback(
    (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
      setPage(newPage);
    },
    []
  );

  const handleChangeRowsPerPage = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    },
    []
  );

  const renderMenu = (
    <Paper
      sx={{
        m: 2,
        pb: 1,
        pt: 2,
        px: 2,
        right: 0,
        zIndex: 1,
        top: '25%',
        position: 'fixed',
        borderRadius: 1.5,
        bgcolor: 'background.paper',
        boxShadow: (theme) => theme.customShadows.dropdown,
      }}
    >
      <Typography variant="subtitle2" sx={{ mb: 1, color: 'text.sexcondary' }}>
        Langs
      </Typography>

      <RadioGroup
        value={currentLang?.value}
        onChange={(event) => {
          onChangeLang(event.target.value as LanguageValue);
        }}
      >
        {allLangs.map((lang) => (
          <FormControlLabel
            key={lang.value}
            value={lang.value}
            label={lang.label}
            control={<Radio />}
          />
        ))}
      </RadioGroup>
    </Paper>
  );

  const DEMO = [
    {
      name: 'Flexible',
      component: (
        <div>
          <Box sx={{ gap: 1, mb: 2, display: 'flex', typography: 'h3', alignItems: 'center' }}>
            <FlagIcon code={currentLang.countryCode} />
            {t('demo.lang')}
          </Box>
          <Typography>{t('demo.description')}</Typography>
        </div>
      ),
    },
    {
      name: 'System (MUI)',
      component: (
        <div>
          <Box sx={{ typography: 'subtitle2' }}>Supports other components including:</Box>
          <Box
            component="ul"
            sx={{ mt: 1, mb: 3, pl: 3, typography: 'body2', listStyleType: 'disc' }}
          >
            <Box component="li"> Data Grid</Box>
            <Box component="li"> Date Pickers</Box>
          </Box>
          <TablePagination
            component="div"
            count={100}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            sx={{ borderRadius: 2, border: (theme) => `solid 1px ${theme.vars.palette.divider}` }}
          />
        </div>
      ),
    },
    {
      name: 'Nav',
      component: (
        <Paper variant="outlined" sx={{ p: 2, width: 1, maxWidth: 320, borderRadius: 2 }}>
          <NavSectionVertical data={navData} />
        </Paper>
      ),
    },
    {
      name: 'Numbers',
      component: (
        <div>
          <Box
            gap={3}
            display="grid"
            gridTemplateColumns={{ xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
          >
            <NumberBlock
              title="Currency"
              type="currency"
              data={[
                2217.01,
                247598.18,
                677606.08,
                4734447.51,
                8471442.09,
                undefined,
                null,
                NaN,
                0,
              ]}
            />

            <NumberBlock
              title="Percent"
              type="percent"
              data={[1.7, 17.67, 28.1, 41.3, 91.16, undefined, null, NaN, 0]}
            />

            <NumberBlock
              title="Shorten"
              type="shorten"
              data={[719, 719.63, 3683.72, 5583407.51, 3345583407.51, undefined, null, NaN, 0]}
            />

            <NumberBlock
              title="Data"
              type="data"
              data={[719, 719.63, 3683.72, 5583407.51, 3345583407.51, undefined, null, NaN, 0]}
            />

            <NumberBlock
              title="Number"
              type="number"
              data={[451, 451.82, 1081.62, 27921.9, 600668.81, 7587054.86, undefined, null, NaN, 0]}
            />

            <StyledPaper>
              <DatePicker
                label="Input"
                value={date}
                onChange={(newValue) => setDate(newValue)}
                slotProps={{ textField: { fullWidth: true } }}
              />
              <Box sx={{ mt: 2, typography: 'subtitle2' }}>Output: {fDate(new Date())}</Box>
            </StyledPaper>
          </Box>
        </div>
      ),
    },
  ];

  return (
    <>
      <ComponentHero>
        <CustomBreadcrumbs
          heading="Multi language"
          links={[{ name: 'Components', href: paths.components }, { name: 'Multi language' }]}
          moreLink={[
            'https://react.i18next.com',
            'https://mui.com/guides/localization/#main-content',
          ]}
        />
      </ComponentHero>

      {renderMenu}

      <ScrollToViewTemplate data={DEMO} />
    </>
  );
}

// ----------------------------------------------------------------------

type NumberBlockProps = {
  data: any[];
  title: string;
  type: 'currency' | 'percent' | 'shorten' | 'data' | 'number';
};

function NumberBlock({ data, type, title }: NumberBlockProps) {
  const renderLabel = (value: any) => {
    if (value === undefined) {
      return 'undefined';
    }
    if (value === null) {
      return 'null';
    }
    if (String(value) === 'NaN') {
      return 'NaN';
    }

    return value;
  };

  return (
    <StyledPaper>
      <Box sx={{ typography: 'subtitle2' }}>{title}</Box>

      {data.map((numb, index) => (
        <Box key={String(index)}>
          <Box component="span" sx={{ color: 'text.primary' }}>
            {renderLabel(numb)}
          </Box>
          <Box component="span" sx={{ color: 'text.secondary' }}>
            {' => '}
            {(type === 'currency' && fCurrency(numb)) ||
              (type === 'percent' && fPercent(numb)) ||
              (type === 'shorten' && fShortenNumber(numb)) ||
              (type === 'data' && fData(numb)) ||
              (type === 'number' && fNumber(numb))}
          </Box>
        </Box>
      ))}
    </StyledPaper>
  );
}
