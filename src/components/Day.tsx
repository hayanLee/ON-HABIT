'use client';

import { HOME } from '@/constant/pathname';
import clsx from 'clsx';
import Link from 'next/link';
import React, { useState } from 'react';

interface DayProps {
    day: string;
    inside: boolean;
    onClick: (day: string) => void;
}
const Day = ({ day, inside, onClick }: DayProps) => {
    const [isChecked, setIsChecked] = useState<boolean>(false);

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
                    <Link
                        href={HOME} // 해당 날짜 페이지로 이동
                        className={clsx(
                            'flex-center w-11 h-11 rounded-full cursor-pointer',
                            isChecked ? 'bg-red-200' : 'bg-violet-300'
                        )}
                    />
                </>
            )}
        </div>
    );
};

export default React.memo(Day);
