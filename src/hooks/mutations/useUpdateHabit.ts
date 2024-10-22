import { HabitInfo } from '@/types/Habit';
import habitKeys from '@/utils/habitKeys';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useUpdateHabit = (day: string) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (habit: HabitInfo) => {
            const updatedHabit = { ...habit, isCompleted: !habit.isCompleted };

            const res = await fetch('/api/habits', {
                method: 'PATCH',
                body: JSON.stringify(updatedHabit),
            });

            if (!res.ok) throw Error('네트워크 에러');
            return res.json();
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: habitKeys.selectedDay(day) });
        },
        onError: () => {},
    });
};

export default useUpdateHabit;
