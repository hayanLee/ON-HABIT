import { HabitInfo } from '@/types/Habit';
import habitKeys from '@/utils/habitKeys';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useUpdateHabit = (day: string) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (habit: HabitInfo) => {
            const updatedHabit = {
                ...habit,
                habitDays: habit.habitDays.map((h) => (h.day === day ? { ...h, isFinished: !h.isFinished } : h)),
                isCompleted: habit.habitDays.every((h) => h.isFinished),
            };
            const res = await fetch('/api/habits', {
                method: 'PATCH',
                body: JSON.stringify(updatedHabit),
            });

            if (!res.ok) throw Error('네트워크 에러');
            return res.json();
        },
        onSuccess: (result) => {
            queryClient.invalidateQueries({ queryKey: habitKeys.selectedDay(day) });
            queryClient.invalidateQueries({ queryKey: habitKeys.habit(result.id) });
        },
        onError: () => {},
    });
};

export default useUpdateHabit;
