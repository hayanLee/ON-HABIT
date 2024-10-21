'use client';
import dayjs from 'dayjs';
import { Fragment, useState } from 'react';
import Day from './Day';

interface WeekProps {
    inside?: boolean;
}

const daysOfWeek = Array.from({ length: 7 }, (_, idx) => dayjs().day(idx).format('ddd'));

const Week = ({ inside = true }: WeekProps) => {
    const [selectedDays, setSelectedDays] = useState<string[]>([]);

    const handleChange = (day: string) => {
        const updatedSelected = selectedDays.includes(day)
            ? selectedDays.filter((d) => d !== day)
            : [...selectedDays, day];

        setSelectedDays(updatedSelected);
    };

    return (
        <div className='flex justify-between'>
            {daysOfWeek.map((day) => (
                <Fragment key={day}>
                    <Day day={day} inside={inside} onClick={handleChange} />
                </Fragment>
            ))}
        </div>
    );
};

export default Week;
