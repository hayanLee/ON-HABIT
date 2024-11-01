'use client';
import Button from '@/components/Button';
import Loading from '@/components/Loading';
import Week from '@/components/Week';
import { useHabitDetailQuery } from '@/hooks/queries';
import useModalStore from '@/stores/store';
import { useMemo } from 'react';

const Modal = ({ params: { id } }: { params: { id: string } }) => {
    const { isModalOpen, closeModal } = useModalStore();
    const { data: habit, isPending } = useHabitDetailQuery(id);

    const handleClick = () => {
        closeModal();
    };

    const finishedCount = useMemo(
        () => habit?.habitDays.reduce((cnt: number, p: any) => cnt + (p.isFinished ? 1 : 0), 0),
        [habit]
    );

    if (isPending) return <Loading />;
    if (!isModalOpen) return null;

    return (
        <div className='bg-secondary rounded-t-2xl h-1/2 z-10 fixed w-inherit bottom-16 p-6 flex flex-col gap-y-6'>
            <div className='flex'>
                <h2 className='grow text-2xl font-bold'>{habit.name}</h2>
                <span className='inline-block cursor-pointer' onClick={handleClick}>
                    ❌
                </span>
            </div>

            <Week habit={habit} />

            <div className='flex-col-center text-lg'>
                <p className='subtitle'>
                    This week you have, <span className='title text-main'>{finishedCount}</span> out of 7 days!
                </p>
                <p className='subtitle'>Great job!</p>
            </div>

            <Button disabled={false}>See My statistics</Button>
        </div>
    );
};

export default Modal;
