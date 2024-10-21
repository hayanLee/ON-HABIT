import { LOCAL } from '@/constant/apiEndpoint';
import { HabitInfo } from '@/types/Habit';
import habitKeys from '@/utils/habitKeys';
import { useQuery } from '@tanstack/react-query';

const useHabitsQuery = (day: string) =>
    useQuery<HabitInfo[]>({
        queryKey: habitKeys.selectedDay(day),
        queryFn: async () => {
            const res = await fetch(`${LOCAL}/api/habits`);
            const data = await res.json();
            return data;
        },
        select: (habits) => habits.filter((habit) => habit.period.includes(day)),
    });

export default useHabitsQuery;
