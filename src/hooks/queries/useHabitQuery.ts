import { HABITS } from '@/constant/apiEndpoint';
import habitKeys from '@/utils/habitKeys';
import { useQuery } from '@tanstack/react-query';

const useHabitQuery = (id: string) => {
    return useQuery({
        queryKey: habitKeys.habit(id),
        queryFn: async () => {
            const res = await fetch(`${HABITS}/${id}`);
            const result = await res.json();
            return result;
        },
    });
};

export default useHabitQuery;
