import { useRef, useState, useEffect, useCallback } from 'react';

// ----------------------------------------------------------------------

export type UseCountdownDateReturn = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
};

export function useCountdownDate(date: Date): UseCountdownDateReturn {
  const [countdown, setCountdown] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    setNewTime();
    const interval = setInterval(setNewTime, 1000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setNewTime = () => {
    const startTime = date;

    const endTime = new Date();

    const distanceToNow = startTime.valueOf() - endTime.valueOf();

    const getDays = Math.floor(distanceToNow / (1000 * 60 * 60 * 24));

    const getHours =
      `0${Math.floor((distanceToNow % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))}`.slice(-2);

    const getMinutes = `0${Math.floor((distanceToNow % (1000 * 60 * 60)) / (1000 * 60))}`.slice(-2);

    const getSeconds = `0${Math.floor((distanceToNow % (1000 * 60)) / 1000)}`.slice(-2);

    setCountdown({
      days: getDays < 10 ? `0${getDays}` : `${getDays}`,
      hours: getHours,
      minutes: getMinutes,
      seconds: getSeconds,
    });
  };

  return countdown;
}

// Usage
// const countdown = useCountdown(new Date('07/07/2022 21:30'));

// ----------------------------------------------------------------------

export type UseCountdownSecondsReturn = {
  counting: boolean;
  countdown: number;
  startCountdown: () => void;
  setCountdown: React.Dispatch<React.SetStateAction<number>>;
};

export function useCountdownSeconds(initCountdown: number): UseCountdownSecondsReturn {
  const [countdown, setCountdown] = useState(initCountdown);

  const remainingSecondsRef = useRef(countdown);

  const startCountdown = useCallback(() => {
    remainingSecondsRef.current = countdown;

    const intervalId = setInterval(() => {
      remainingSecondsRef.current -= 1;

      if (remainingSecondsRef.current === 0) {
        clearInterval(intervalId);
        setCountdown(initCountdown);
      } else {
        setCountdown(remainingSecondsRef.current);
      }
    }, 1000);
  }, [initCountdown, countdown]);

  const counting = initCountdown > countdown;

  return {
    counting,
    countdown,
    startCountdown,
    setCountdown,
  };
}

// Usage
// const { countdown, startCountdown, counting } = useCountdownSeconds(30);
