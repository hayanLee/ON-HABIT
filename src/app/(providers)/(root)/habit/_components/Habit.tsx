'use client';
import { HABIT } from '@/constant/pathname';
import { useUpdateHabitMutation } from '@/hooks/mutations';
import { HabitInfo } from '@/types/Habit';
import clsx from 'clsx';
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
        <div className='flex-center py-4 border-b-2 border-secondary'>
            <div className='flex-vertical grow gap-y-2' onClick={handleClick}>
                <h4 className={clsx('subtitle', foundedPeriod?.isFinished && 'line-through text-text-disabled')}>
                    {name}
                </h4>
                {foundedPeriod?.isFinished ? (
                    <span className='bg-secondary rounded-lg w-fit px-2 font-semibold'>Completed at {remind}</span>
                ) : (
                    <span className='text-text-disabled font-semibold'>unusally completed at {remind}</span>
                )}
            </div>
            <input
                type='checkbox'
                className='w-6 h-6 rounded-full bg-secondary checked:bg-main appearance-none'
                onChange={handleChecked}
                checked={foundedPeriod?.isFinished}
            />
        </div>
    );
};

export default Habit;
