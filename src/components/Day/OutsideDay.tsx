'use client';

import { useHabitsQuery } from '@/hooks/queries';
import { useDayStore } from '@/stores/store';
import clsx from 'clsx';
import React from 'react';

interface OutSideProps {
    day: string;
}
const OutSideDay = ({ day }: OutSideProps) => {
    const { selectedDay, updateDay } = useDayStore();
    const { data: habits } = useHabitsQuery(day);
    const handleClick = () => updateDay(day);
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
