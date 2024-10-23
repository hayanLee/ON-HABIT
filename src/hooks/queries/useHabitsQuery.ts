import { LOCAL } from '@/constant/apiEndpoint';
import { HabitInfo } from '@/types/Habit';
import { fetchData } from '@/utils/fetchData';
import habitKeys from '@/utils/habitKeys';
import { useQuery } from '@tanstack/react-query';

// select 말고, 요일별로 쿼리하기
const useHabitsQuery = (day: string) =>
    useQuery<HabitInfo[]>({
        queryKey: habitKeys.selectedDay(day),
        queryFn: async () => fetchData(`${LOCAL}/api/habits`),
        select: (habits) => habits.filter((habit) => habit.scheduledDays.includes(day)),
    });

export default useHabitsQuery;
