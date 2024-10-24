import { fetchData } from '@/utils/fetchData';
import habitKeys from '@/utils/habitKeys';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FieldValues } from 'react-hook-form';

const useCreateHabitMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (data: FieldValues) =>
            fetchData('/api/habits', { method: 'POST', body: JSON.stringify(data) }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: habitKeys.habits() });
        },
        onError: () => {},
    });
};

export default useCreateHabitMutation;
