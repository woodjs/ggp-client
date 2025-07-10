const { useEffect, useState } = require('react');

const addZero = (num) => (num < 10 ? `0${num}` : num);

const timeFormat = (time) => {
  const days = addZero(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = addZero(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const minutes = addZero(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const seconds = addZero(Math.floor((time % (1000 * 60)) / 1000));
  return { days, hours, minutes, seconds };
};

const getHoursOffset = () => {
  const newDate = new Date();
  return -(newDate.getTimezoneOffset() / 60);
};

/**
 * @param {Date} initialDate
 * @returns {{time: {days: number, hours: number, minutes: number, seconds: number}, status: string}}
 * @example
 * const { time, status } = useTimer(new Date('2021-01-01'));
 * console.log(time, status);
 */

const useTimer = (initialDate, offsetHours = getHoursOffset()) => {
  const [date] = useState(initialDate);
  const [time, setTime] = useState(null);
  const [status, setStatus] = useState('error');
  const timer = () => {
    const now = new Date().getTime();
    const distance = date - now - offsetHours * 60 * 60 * 1000;
    //console.log('distance', timeFormat(distance));
    if (distance > 0) {
      setTime(timeFormat(distance));
      setStatus('active');
    } else {
      setTime(timeFormat(0));
      setStatus('finished');
    }
  };

  useEffect(() => {
    timer();
    const timerInterval = setInterval(timer, 1000);
    return () => clearInterval(timerInterval);
  }, [date]);

  return { time, status };
};

export default useTimer;
