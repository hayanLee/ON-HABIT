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
        <>
            <label htmlFor={day} className={clsx('day', isChecked && 'checked')}>
                <span className='font-base'>{day}</span>
                <input type='checkbox' id={day} className='hidden' checked={isChecked} onChange={handleClick} />
            </label>
        </>
    );
};

export default React.memo(InsideDay);
