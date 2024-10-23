'use client';
import { HabitInfo } from '@/types/Habit';
import { WEEKDAYS } from '@/utils/dayjs';
import { Fragment, useState } from 'react';
import CompletionDay from './Day/CompletionDay';
import InsideDay from './Day/InsideDay';
import OutsideDay from './Day/OutsideDay';

interface WeekProps {
    inside?: boolean;
    onChangeDays?: (days: string[]) => void;
    habit?: HabitInfo;
}

// 1. 메인 페이지 - 해당 요일의 습관 개수를 담음, 하나만 선택
// 2. 디테일 페이지 - v 표시, 선택 불가
// 3. add 페이지 - 다중선택
const Week = ({ inside = false, onChangeDays, habit }: WeekProps) => {
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
                    <div className='flex-center flex-col'>
                        {inside ? (
                            <InsideDay day={day} onClick={handleChange} />
                        ) : habit?.id ? (
                            <CompletionDay day={day} habit={habit} />
                        ) : (
                            <OutsideDay day={day} />
                        )}
                    </div>
                </Fragment>
            ))}
        </div>
    );
};

export default Week;
