'use client';

import clsx from 'clsx';
import React, { useState } from 'react';

interface InsideDayProps {
    day: string;
    onClick: (day: string) => void;
}
const InsideDay = ({ day, onClick }: InsideDayProps) => {
    const [isChecked, setIsChecked] = useState<boolean>(false);

    const handleClick = () => {
        setIsChecked((prev) => !prev);
        onClick(day);
    };
    return (
        <div className='flex-center flex-col'>
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
        </div>
    );
};

export default React.memo(InsideDay);
