'use client';
import { useHabitsQuery } from '@/hooks/queries';
import useDayStore from '@/stores/day.store';
import clsx from 'clsx';
import React from 'react';

interface ViewableProps {
    day: string;
}

// home
const ViewableDay = ({ day }: ViewableProps) => {
    const selectedDay = useDayStore((state) => state.selectedDay);
    const updateDay = useDayStore((state) => state.updateDay);

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

export default React.memo(ViewableDay);
