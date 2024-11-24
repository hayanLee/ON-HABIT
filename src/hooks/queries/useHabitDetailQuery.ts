import { fetchData } from '@/utils/fetchData';
import habitKeys from '@/utils/habitKeys';
import { useQuery } from '@tanstack/react-query';

const useHabitDetailQuery = (id: string) => {
    return useQuery({
        queryKey: habitKeys.habit(id),
        queryFn: async () => await fetchData(`${process.env.NEXT_PUBLIC_BASE_URL}/api/habit/?id=${id}`),
        enabled: !!id,
    });
};

export default useHabitDetailQuery;
