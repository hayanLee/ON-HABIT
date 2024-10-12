'use client';

import { HABIT } from '@/constant/pathname';
import { useRouter } from 'next/navigation';

const Habit = ({ id }: { id: number }) => {
    const router = useRouter();
    return (
        <div className='py-4 border-b-2' onClick={() => router.push(`${HABIT}/${id}`)}>
            <div className='flex'>
                <h4 className='grow'>Read 10 pages of a book</h4>
                <input type='checkbox' />
            </div>
            <button disabled className='bg-slate-500 text-white rounded'>
                unusally completed at 10:15 pm
            </button>
        </div>
    );
};

export default Habit;
