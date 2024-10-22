'use client';
import dayjs from 'dayjs';
import { Fragment, useState } from 'react';
import InsideDay from './Day/InsideDay';
import OutsideDay from './Day/OutsideDay';

interface WeekProps {
    inside?: boolean;
    onChangeDays?: (days: string[]) => void; // new-habit
}

const daysOfWeek = Array.from({ length: 7 }, (_, idx) => dayjs().day(idx).format('ddd'));

const Week = ({ inside = false, onChangeDays }: WeekProps) => {
    const [selectedDays, setSelectedDays] = useState<string[]>([]);

    const handleChange = (day: string) => {
        const updatedSelected = selectedDays.includes(day)
            ? selectedDays.filter((d) => d !== day)
            : [...selectedDays, day];

        setSelectedDays(updatedSelected);

        if (onChangeDays) onChangeDays(updatedSelected);
    };

    return (
        <div className='flex justify-between'>
            {daysOfWeek.map((day) => (
                <Fragment key={day}>
                    {inside ? <InsideDay day={day} onClick={handleChange} /> : <OutsideDay day={day} />}
                </Fragment>
            ))}
        </div>
    );
};

export default Week;
