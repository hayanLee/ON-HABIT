'use client';

import { useDayContext } from '@/contexts/DayContext';
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
            <div onClick={handleClick} className={clsx('day', selectedDay === day && 'checked')}>
                <span className='subtitle'>{habits?.length || 0}</span>
            </div>
        </>
    );
};

export default React.memo(OutSideDay);
