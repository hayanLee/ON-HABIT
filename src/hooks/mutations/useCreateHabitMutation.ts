import { HOME } from '@/constant/pathname';
import { fetchData } from '@/utils/fetchData';
import habitKeys from '@/utils/habitKeys';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { FieldValues } from 'react-hook-form';

const useCreateHabitMutation = () => {
    const queryClient = useQueryClient();
    const router = useRouter();
    return useMutation({
        mutationFn: async (data: FieldValues) =>
            fetchData('/api/habits', { method: 'POST', body: JSON.stringify(data) }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: habitKeys.habits() });
            alert('등록 완료');
            router.replace(HOME);
        },
        onError: () => {
            alert('등록 실패');
        },
    });
};

export default useCreateHabitMutation;
