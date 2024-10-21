'use client';

import { useDate } from '@/contexts/date.context';
import clsx from 'clsx';
import React, { useState } from 'react';

interface DayProps {
    day: string;
    inside: boolean;
    onClick: (day: string) => void;
}
const Day = ({ day, inside, onClick }: DayProps) => {
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const { handleChangeDay } = useDate();

    const handleClick = () => {
        setIsChecked((prev) => !prev);
        onClick(day);
    };
    return (
        <div className='flex-center flex-col'>
            {inside ? (
                <>
                    <label
                        htmlFor={day}
                        className={clsx(
                            'flex-center w-11 h-11 rounded-full cursor-pointer',
                            isChecked ? 'bg-red-200' : 'bg-violet-300'
                        )}
                    >
                        <span className='font-medium'>{day}</span>
                        <input type='checkbox' id={day} className='hidden' checked={isChecked} onChange={handleClick} />
                    </label>
                </>
            ) : (
                <>
                    <span className='subtitle'>{day}</span>
                    <div
                        onClick={() => handleChangeDay(day)}
                        className={clsx(
                            'flex-center w-11 h-11 rounded-full cursor-pointer',
                            isChecked ? 'bg-red-200' : 'bg-violet-300'
                        )}
                    ></div>
                </>
            )}
        </div>
    );
};

export default React.memo(Day);
