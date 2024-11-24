'use client';
import { WEEKDAYS } from '@/constant/dayjs';
import { Tables } from '@/types/supabase';
import MultiSelectableDay from './Day/MultiSelectableDay';
import ReadOnlyDay from './Day/ReadOnlyDay';
import ViewableDay from './Day/ViewableDay';

interface WeekProps {
    onSelectDays?: (days: string) => void;
    type: 'multi-select' | 'read-only' | 'viewable';
    habit?: Tables<'habits'>;
}

const Week = ({ onSelectDays, type, habit }: WeekProps) => {
    const handleDayClick = (day: string) => {
        if (onSelectDays) onSelectDays(day);
    };

    const renderedDay = (day: string) => {
        switch (type) {
            case 'multi-select':
                return <MultiSelectableDay day={day} onClick={handleDayClick} />;
            case 'read-only':
                return <ReadOnlyDay day={day} habit={habit} />;
            case 'viewable':
                return <ViewableDay day={day} />;
        }
    };

    return (
        <div className='flex justify-between'>
            {WEEKDAYS.map((day) => (
                <div className='flex-center flex-col' key={day}>
                    {renderedDay(day)}
                </div>
            ))}
        </div>
    );
};

export default Week;
