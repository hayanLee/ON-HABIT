import { NewHabit } from '@/app/(providers)/(root)/new-habit/page';
import { fetchData } from '@/utils/fetchData';
import habitKeys from '@/utils/habitKeys';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useCreateHabitMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (formData: NewHabit) => {
            const processedData = {
                habit_name: formData.name,
                scheduled_days: formData.scheduledDays.map((day) => ({ day, isCompleted: false })),
                remind: formData.remind,
            };

            fetchData('/api/habits', { method: 'POST', body: JSON.stringify(processedData) });
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: habitKeys.habits() });
            alert('등록 완료');
        },
        onError: () => {
            alert('등록 실패');
        },
    });
};

export default useCreateHabitMutation;
