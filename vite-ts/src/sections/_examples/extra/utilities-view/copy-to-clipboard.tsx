import { useState, useCallback } from 'react';

import Tooltip from '@mui/material/Tooltip';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';

import { useDoubleClick } from 'src/hooks/use-double-click';
import { useCopyToClipboard } from 'src/hooks/use-copy-to-clipboard';

import { toast } from 'src/components/snackbar';
import { Iconify } from 'src/components/iconify';

import { ComponentBlock, ComponentContainer } from '../../component-block';

// ----------------------------------------------------------------------

export function CopyToClipboard() {
  const { copy } = useCopyToClipboard();

  const [value, setValue] = useState('https://www.npmjs.com/package/');

  const textOnClick = `Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
  Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat
  dolor lectus quis orci. Cras non dolor.
  `;

  const onCopy = useCallback(
    (text: string) => {
      if (text) {
        toast.success('Copied!');
        copy(text);
      }
    },
    [copy]
  );

  const handleClick = useDoubleClick({ doubleClick: () => onCopy(textOnClick) });

  const handleChange = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  }, []);

  return (
    <ComponentContainer
      sx={{
        rowGap: 5,
        columnGap: 3,
        display: 'grid',
        gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' },
      }}
    >
      <ComponentBlock title="onChange">
        <TextField
          fullWidth
          value={value}
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Tooltip title="Copy">
                  <IconButton onClick={() => onCopy(value)}>
                    <Iconify icon="eva:copy-fill" width={24} />
                  </IconButton>
                </Tooltip>
              </InputAdornment>
            ),
          }}
        />
      </ComponentBlock>

      <ComponentBlock title="onDoubleClick">
        <Typography onClick={handleClick}>{textOnClick}</Typography>
      </ComponentBlock>
    </ComponentContainer>
  );
}
