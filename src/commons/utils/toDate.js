import dayjs from 'dayjs';

export const toDateNormalUtil = (date) =>
  dayjs(date || new Date()).format('DD/MM/YYYY');
