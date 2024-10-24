import dayjs from 'dayjs';

// 한 주의 요일을 담은 배열
export const WEEKDAYS = Array.from({ length: 7 }, (_, idx) => dayjs().day(idx).format('ddd'));

// 현재 요일
export const CURRENT_DAY = dayjs().format('ddd');

// 현재 날짜의 월, 일을 담은 배열
export const TODAY = {
    month: dayjs().format('MMM'),
    day: dayjs().format('DD'),
};
