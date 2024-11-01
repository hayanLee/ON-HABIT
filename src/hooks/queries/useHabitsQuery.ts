import { HabitInfo } from '@/types/Habit';
import { fetchData } from '@/utils/fetchData';
import habitKeys from '@/utils/habitKeys';
import { useQuery } from '@tanstack/react-query';

const useHabitsQuery = (day: string) =>
    useQuery<HabitInfo[]>({
        queryKey: habitKeys.selectedDay(day),
        queryFn: async () => fetchData(`${process.env.NEXT_PUBLIC_BASE_URL}/api/habits?day=${day}`),
    });

export default useHabitsQuery;
