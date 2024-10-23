import { HABITS } from '@/constant/apiEndpoint';
import { fetchData } from '@/utils/fetchData';
import habitKeys from '@/utils/habitKeys';
import { useQuery } from '@tanstack/react-query';

const useHabitDetailQuery = (id: string) => {
    return useQuery({
        queryKey: habitKeys.habit(id),
        queryFn: async () => await fetchData(`${HABITS}/${id}`),
        enabled: !!id,
    });
};

export default useHabitDetailQuery;
