'use client';

import Button from '@/components/Button';
import Week from '@/components/Week';
import { useHabitDetailQuery } from '@/hooks/queries';
import { useRouter } from 'next/navigation';

const Modal = ({ params: { id } }: { params: { id: string } }) => {
    const router = useRouter();
    const { data: habit, isPending } = useHabitDetailQuery(id);

    const handleCloseModal = (e: React.MouseEvent) => {
        e.stopPropagation();
        router.back();
    };

    if (isPending) return;

    return (
        <div className='absolute bg-black/50 inset-0 z-10 flex items-center justify-center' onClick={handleCloseModal}>
            <div className='bg-secondary rounded-2xl h-1/2 w-full bottom-16 p-6 flex flex-col gap-y-6'>
                <div className='flex'>
                    <h2 className='grow text-2xl font-bold'>{habit.habit_name}</h2>
                    <button className='inline-block cursor-pointer' onClick={handleCloseModal}>
                        ❌
                    </button>
                </div>

                <Week habit={habit} type='read-only' />

                <div className='flex-col-center text-lg'>
                    <p className='subtitle'>Great job!</p>
                </div>

                <Button disabled={false}>See My statistics</Button>
            </div>
        </div>
    );
};

export default Modal;
