'use client';

import { useDayContext } from '@/contexts/day.context';
import { useHabitsQuery } from '@/hooks/queries';
import clsx from 'clsx';
import React from 'react';

interface OutSideProps {
    day: string;
}
const OutSideDay = ({ day }: OutSideProps) => {
    const { selectedDay, handleChangeDay } = useDayContext();
    const { data: habits } = useHabitsQuery(day);
    const handleClick = () => handleChangeDay(day);
    return (
        <>
            <span className='subtitle'>{day}</span>
            <div
                onClick={handleClick}
                className={clsx(
                    'flex-center w-11 h-11 rounded-full cursor-pointer',
                    selectedDay === day ? 'bg-red-200' : 'bg-violet-300'
                )}
            >
                <span className='subtitle'>{habits?.length || 0}</span>
            </div>
        </>
    );
};

export default React.memo(OutSideDay);
