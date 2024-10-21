import habitKeys from '@/utils/habitKeys';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FieldValues } from 'react-hook-form';

const useCreateHabit = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (data: FieldValues) => {
            const res = await fetch('/api/habits', {
                method: 'POST',
                body: JSON.stringify(data),
            });

            if (!res.ok) throw Error('네트워크 에러');
            return res.json();
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: habitKeys.habits() });
        },
        onError: () => {},
    });
};

export default useCreateHabit;
