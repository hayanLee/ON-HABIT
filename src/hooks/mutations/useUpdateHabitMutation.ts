import { HabitInfo } from '@/types/Habit';
import { fetchData } from '@/utils/fetchData';
import habitKeys from '@/utils/habitKeys';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useUpdateHabitMutation = (day: string) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (habit: HabitInfo) => {
            const updatedHabit = {
                ...habit,
                habitDays: habit.habitDays.map((h) => (h.day === day ? { ...h, isFinished: !h.isFinished } : h)),
                isCompleted: habit.habitDays.every((h) => h.isFinished),
            };

            return fetchData('/api/habits', {
                method: 'PATCH',
                body: JSON.stringify(updatedHabit),
            });
        },
        onSuccess: (result) => {
            queryClient.invalidateQueries({ queryKey: habitKeys.selectedDay(day) });
            queryClient.invalidateQueries({ queryKey: habitKeys.habit(result.id) });
        },
        onError: () => {},
    });
};

export default useUpdateHabitMutation;
