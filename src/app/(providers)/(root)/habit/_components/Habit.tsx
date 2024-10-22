'use client';
import { HABIT } from '@/constant/pathname';
import useUpdateHabit from '@/hooks/mutations/useUpdateHabit';
import { HabitInfo } from '@/types/Habit';
import { useRouter } from 'next/navigation';

interface HabitProps {
    day: string;
    habit: HabitInfo;
}

const Habit = ({ habit, day }: HabitProps) => {
    const { id, name, periods } = habit;
    const matchingPeriod = periods.find((period) => period.day === day);

    const router = useRouter();
    const { mutateAsync } = useUpdateHabit(day);
    const handleChecked = async () => await mutateAsync(habit);

    return (
        <div className='flex-center py-4 border-b-2'>
            <div
                className='flex flex-col grow gap-y-2'
                onClick={() => router.push(`${HABIT}/${id}`, { scroll: false })}
            >
                <h4 className='subtitle'>{name}</h4>
                {matchingPeriod?.isFinished ? (
                    <span className='bg-slate-500 text-white rounded w-fit'>Completed at 7:20AM</span>
                ) : (
                    <span>unusally completed at 10:15 pm</span>
                )}
            </div>
            <input
                type='checkbox'
                className='w-6 h-6 ml-4 rounded-full bg-gray-400 checked:bg-blue-500 appearance-none'
                onChange={handleChecked}
                checked={matchingPeriod?.isFinished}
            />
        </div>
    );
};

export default Habit;
