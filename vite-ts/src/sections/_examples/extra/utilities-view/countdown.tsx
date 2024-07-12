import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { useCountdownDate, useCountdownSeconds } from 'src/hooks/use-countdown';

import { ComponentBlock, ComponentContainer } from '../../component-block';

// ----------------------------------------------------------------------

export function Countdown() {
  const countdownDate = useCountdownDate(new Date('08/08/2025 21:30'));

  const { countdown, startCountdown, counting } = useCountdownSeconds(30);

  return (
    <ComponentContainer
      sx={{
        rowGap: 5,
        columnGap: 3,
        display: 'grid',
        gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' },
      }}
    >
      <ComponentBlock title="Date">
        <Box
          gap={3}
          display="flex"
          alignItems="center"
          sx={{ textAlign: 'center', typography: 'body2' }}
        >
          <div>
            <Box sx={{ typography: 'h5' }}>{countdownDate.days}</Box>
            <Box sx={{ color: 'text.secondary' }}>days</Box>
          </div>
          <div>
            <Box sx={{ typography: 'h5' }}>{countdownDate.hours}</Box>
            <Box sx={{ color: 'text.secondary' }}>hours</Box>
          </div>
          <div>
            <Box sx={{ typography: 'h5' }}>{countdownDate.minutes}</Box>
            <Box sx={{ color: 'text.secondary' }}>minutes</Box>
          </div>
          <div>
            <Box sx={{ typography: 'h5' }}>{countdownDate.seconds}</Box>
            <Box sx={{ color: 'text.secondary' }}>seconds</Box>
          </div>
        </Box>
      </ComponentBlock>

      <ComponentBlock title="Seconds">
        <Box
          gap={3}
          display="flex"
          alignItems="center"
          sx={{ typography: 'h5', textAlign: 'center' }}
        >
          <Button disabled={counting} onClick={startCountdown}>
            {counting ? `Counting... (${countdown})` : `Start`}
          </Button>
        </Box>
      </ComponentBlock>
    </ComponentContainer>
  );
}
