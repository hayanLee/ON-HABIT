'use client';
import Button from '@/components/Button';
import Loading from '@/components/Loading';
import Week from '@/components/Week';
import useHabitDetailQuery from '@/hooks/queries/useHabitDetailQuery';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';

const Modal = ({ params: { id } }: { params: { id: string } }) => {
    const router = useRouter();
    const handleClick = () => router.back();
    const { data: habit, isPending } = useHabitDetailQuery(id);
    const finishedCount = useMemo(() => habit?.periods.reduce((cnt, p) => cnt + (p.isFinished ? 1 : 0), 0), [habit]);

    if (isPending) return <Loading />;

    return (
        <div className='bg-red-200 h-1/2 z-10 fixed w-inherit bottom-16 p-6 flex flex-col gap-y-6'>
            <div className='flex'>
                <h2 className='grow text-3xl font-bold'>{habit.name}</h2>
                <span className='inline-block' onClick={handleClick}>
                    ❌
                </span>
            </div>

            <Week id={id} />

            <div className='flex-col-center text-lg'>
                <p>
                    This week you have, <span className='subtitle'>{finishedCount}</span> out of 7 days !
                </p>
                <p>Great job!</p>
            </div>

            <Button>See My statistics</Button>
        </div>
    );
};

export default Modal;
