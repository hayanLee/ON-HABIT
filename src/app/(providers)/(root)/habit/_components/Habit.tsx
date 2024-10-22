'use client';
import { HABIT } from '@/constant/pathname';
import { HabitInfo } from '@/types/Habit';
import { useRouter } from 'next/navigation';

interface HabitProps {
    habit: HabitInfo;
}

const Habit = ({ habit: { id, name, completed } }: HabitProps) => {
    const router = useRouter();
    // const test = async (data) => {
    //     const res = await fetch(`${HABITS}`, {
    //         method: 'PATCH',
    //         body: JSON.stringify(data),
    //     });
    //     return await res.json();
    // };

    return (
        <div className='flex-center py-4 border-b-2'>
            <div className='flex flex-col grow gap-y-2' onClick={() => router.push(`${HABIT}/${id}`)}>
                <h4 className='subtitle'>{name}</h4>
                {completed ? (
                    <span className='bg-slate-500 text-white rounded w-fit'>Completed at 7:20AM</span>
                ) : (
                    <span>unusally completed at 10:15 pm</span>
                )}
            </div>
            <input
                type='checkbox'
                className='w-6 h-6 ml-4 rounded-full bg-gray-400 checked:bg-blue-500 appearance-none'
                // checked={completed}
            />
        </div>
    );
};

export default Habit;
