'use client';
import clsx from 'clsx';
import React, { useState } from 'react';

interface MultiSelectableDayProps {
    day: string;
    onClick: (day: string) => void;
}

// add habit
// 클릭하면 체크 설정/해제
const MultiSelectableDay = ({ day, onClick }: MultiSelectableDayProps) => {
    const [isChecked, setIsChecked] = useState<boolean>(false);

    const handleClick = () => {
        setIsChecked((prev) => !prev);
        onClick(day);
    };

    return (
        <label htmlFor={day} className={clsx('day', isChecked && 'checked')}>
            <span className='font-base'>{day}</span>
            <input type='checkbox' id={day} className='hidden' checked={isChecked} onChange={handleClick} />
        </label>
    );
};

export default React.memo(MultiSelectableDay);
