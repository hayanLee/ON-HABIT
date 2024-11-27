import { WEEKDAYS } from '@/constant/dayjs';
import MultiSelectableDay from './Day/MultiSelectableDay';
import ReadOnlyDay from './Day/ReadOnlyDay';
import ViewableDay from './Day/ViewableDay';

interface WeekProps {
    onSelectDays?: (days: string) => void;
    type: 'multi-select' | 'read-only' | 'viewable';
    habit?: { day: string; isCompleted: boolean }[];
}

const Week = ({ onSelectDays, type, habit }: WeekProps) => {
    const handleDayClick = (day: string) => onSelectDays?.(day);

    const renderedDay = (day: string) => {
        switch (type) {
            case 'multi-select':
                return <MultiSelectableDay day={day} onClick={handleDayClick} />;
            case 'read-only':
                if (habit) {
                    const matchedDay = habit.find((h) => h.day === day);
                    return <ReadOnlyDay day={day} isComplete={matchedDay?.isCompleted} />;
                }
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
