import Radio from '@mui/material/Radio';
import Typography from '@mui/material/Typography';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import { StyledControlPanel } from '../styles';

// ----------------------------------------------------------------------

type Props = {
  selectTheme: string;
  onChangeTheme: (theme: string) => void;
  themes: {
    [key: string]: string;
  };
};

export function ControlPanel({ themes, selectTheme, onChangeTheme }: Props) {
  return (
    <StyledControlPanel>
      <Typography variant="subtitle2" sx={{ mb: 1, color: 'common.white' }}>
        Select theme:
      </Typography>

      <RadioGroup value={selectTheme} onChange={(event, newValue) => onChangeTheme(newValue)}>
        {Object.keys(themes).map((item) => (
          <FormControlLabel
            key={item}
            value={item}
            control={<Radio size="small" />}
            label={item}
            sx={{ color: 'common.white', textTransform: 'capitalize' }}
          />
        ))}
      </RadioGroup>
    </StyledControlPanel>
  );
}
