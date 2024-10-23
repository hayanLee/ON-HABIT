import dayjs from 'dayjs';

export const WEEKDAYS = Array.from({ length: 7 }, (_, idx) => dayjs().day(idx).format('ddd'));
export const CURRENT_DAY = dayjs().format('ddd');
