import { LOCAL } from '@/constant/apiEndpoint';
import { HabitInfo } from '@/types/Habit';
import habitKeys from '@/utils/habitKeys';
import { useQuery } from '@tanstack/react-query';

const useHabitsQuery = () =>
    useQuery<HabitInfo[]>({
        queryKey: habitKeys.habits(),
        queryFn: async () => {
            const res = await fetch(`${LOCAL}/api/habits`);
            const data = await res.json();
            return data;
        },
    });

export default useHabitsQuery;
