'use client';
import useHabitDetailQuery from '@/hooks/queries/useHabitDetailQuery';
import { WEEKDAYS } from '@/utils/dayjs';
import { Fragment, useState } from 'react';
import FinishedDay from './Day/FinishedDay';
import InsideDay from './Day/InsideDay';
import OutsideDay from './Day/OutsideDay';

interface WeekProps {
    inside?: boolean;
    onChangeDays?: (days: string[]) => void;
    id?: string;
}

const Week = ({ inside = false, onChangeDays, id }: WeekProps) => {
    const { data } = useHabitDetailQuery(id) || null;
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
            {WEEKDAYS.map((day) => (
                <Fragment key={day}>
                    {inside ? (
                        <InsideDay day={day} onClick={handleChange} />
                    ) : id ? (
                        <div className='flex-center flex-col'>
                            <span className='subtitle'>{day}</span>
                            <FinishedDay />
                        </div>
                    ) : (
                        <OutsideDay day={day} />
                    )}
                </Fragment>
            ))}
        </div>
    );
};

export default Week;
