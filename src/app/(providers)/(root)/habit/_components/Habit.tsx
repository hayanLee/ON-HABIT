'use client';
import { HABIT } from '@/constant/pathname';
import { useUpdateHabitMutation } from '@/hooks/mutations';

import { HabitInfo } from '@/types/Habit';
import { useRouter } from 'next/navigation';

interface HabitProps {
    day: string;
    habit: HabitInfo;
}

const Habit = ({ habit, day }: HabitProps) => {
    const { id, name, habitDays, remind } = habit;
    const foundedPeriod = habitDays.find((period) => period.day === day);

    const router = useRouter();
    const { mutateAsync } = useUpdateHabitMutation(day);

    const handleClick = () => router.push(`${HABIT}/${id}`, { scroll: false });
    const handleChecked = async () => await mutateAsync(habit);

    return (
        <div className='flex-center py-4 border-b-2'>
            <div className='flex-vertical grow gap-y-2' onClick={handleClick}>
                <h4 className='subtitle'>{name}</h4>
                {foundedPeriod?.isFinished ? (
                    <span className='bg-slate-500 text-white rounded w-fit'>Completed at {remind}</span>
                ) : (
                    <span>unusally completed at {remind}</span>
                )}
            </div>
            <input
                type='checkbox'
                className='w-6 h-6 ml-4 rounded-full bg-gray-400 checked:bg-blue-500 appearance-none'
                onChange={handleChecked}
                checked={foundedPeriod?.isFinished}
            />
        </div>
    );
};

export default Habit;
