import { useState, useEffect, useCallback } from 'react';

// ----------------------------------------------------------------------

export type UseCountdownDateReturn = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
};

function formatTime(value: number) {
  return String(value).length === 1 ? `0${value}` : `${value}`;
}

function calculateTimeDifference(futureDate: Date, currentDate: Date) {
  const distance = futureDate.getTime() - currentDate.getTime();

  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((distance % (1000 * 60)) / 1000),
  };
}

export function useCountdownDate(targetDate: Date, placeholder = '- -'): UseCountdownDateReturn {
  const [value, setValue] = useState({
    days: placeholder,
    hours: placeholder,
    minutes: placeholder,
    seconds: placeholder,
  });

  const handleUpdate = useCallback(() => {
    const now = new Date();
    const { days, hours, minutes, seconds } = calculateTimeDifference(targetDate, now);

    setValue({
      days: formatTime(days),
      hours: formatTime(hours),
      minutes: formatTime(minutes),
      seconds: formatTime(seconds),
    });
  }, [targetDate]);

  useEffect(() => {
    handleUpdate();
    const interval = setInterval(handleUpdate, 1000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return value;
}

/**
 * Usage
 * const countdown = useCountdownDate(new Date('2025-08-20 21:30'));
 */

// ----------------------------------------------------------------------

export type UseCountdownSecondsReturn = {
  value: number;
  start: () => void;
  reset: () => void;
  isCounting: boolean;
  setValue: React.Dispatch<React.SetStateAction<number>>;
};

export function useCountdownSeconds(initialSeconds: number): UseCountdownSecondsReturn {
  const [value, setValue] = useState(initialSeconds);

  const [isCounting, setIsCounting] = useState(false);

  const handleStart = useCallback(() => {
    setIsCounting(true);
  }, []);

  const handleReset = useCallback(() => {
    setIsCounting(false);
    setValue(initialSeconds);
  }, [initialSeconds]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isCounting && value > 0) {
      interval = setInterval(() => {
        setValue((prevValue) => prevValue - 1);
      }, 1000);
    } else if (value <= 0) {
      setIsCounting(false);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isCounting, value]);

  return {
    value,
    setValue,
    isCounting,
    start: handleStart,
    reset: handleReset,
  };
}

/**
 * Usage
 * const countdown = useCountdownSeconds(10);
 * const { value, start, reset, isCounting } = useCountdownSeconds(30);
 */
