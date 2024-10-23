import { LOCAL } from '@/constant/apiEndpoint';
import { HabitInfo } from '@/types/Habit';
import habitKeys from '@/utils/habitKeys';
import { useQuery } from '@tanstack/react-query';

const fetchHabit = async (url: string) => {
    const res = await fetch(url);
    if (!res.ok) throw new Error('fetchHabit 실패');
    return await res.json();
};

// select 말고, 요일별로 쿼리하기
const useHabitsQuery = (day: string) =>
    useQuery<HabitInfo[]>({
        queryKey: habitKeys.selectedDay(day),
        queryFn: async () => fetchHabit(`${LOCAL}/api/habits`),
        select: (habits) => habits.filter((habit) => habit.scheduledDays.includes(day)),
    });

export default useHabitsQuery;
