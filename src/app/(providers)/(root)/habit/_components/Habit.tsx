'use client';
import { HABIT } from '@/constant/pathname';
import { useUpdateHabitMutation } from '@/hooks/mutations';
import { Tables } from '@/types/supabase';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';

export interface HabitProps {
    habit: Tables<'habits'>;
    day: string;
}

const Habit = ({ habit, day }: HabitProps) => {
    const router = useRouter();

    const { mutate } = useUpdateHabitMutation(day);

    const { id, habit_name: name, remind, is_habit_completed: isCompleted, memo } = habit;

    const handleClick = () => {
        router.push(`${HABIT}/${id}`, { scroll: false });
    };

    const handleChecked = () => mutate(habit);

    return (
        <div className='flex-center py-4 border-b-2 border-secondary'>
            <div className='flex-vertical grow gap-y-2' onClick={handleClick}>
                <h4 className={clsx('subtitle', isCompleted && 'line-through text-text-disabled')}>{name}</h4>
                {isCompleted ? (
                    <span className='bg-point rounded-lg w-fit px-2 font-semibold'>Completed at {remind}</span>
                ) : (
                    <span className='text-text-disabled font-semibold'>
                        {memo || `unusally completed at ${remind}`}
                    </span>
                )}
            </div>
            <input
                type='checkbox'
                className='size-base rounded-full bg-point checked:bg-main appearance-none'
                onChange={handleChecked}
                checked={!!isCompleted}
            />
        </div>
    );
};

export default Habit;
