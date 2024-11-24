import { HabitProps } from '@/app/(providers)/(root)/habit/_components/Habit';
import clsx from 'clsx';

// modal
const ReadOnlyDay = ({ day, habit }: HabitProps) => {
    const { scheduled_days } = habit;

    return (
        <>
            <span className='subtitle'>{day}</span>
            {/* <div className={clsx('day cursor-default', habit?.includes(day) && 'checked')}> */}
            <div className={clsx('day cursor-default')}>
                <span className='subtitle'>
                    ✅
                    {/* {habit?.scheduledDays.includes(day)
                        ? habit?.habitDays.find((d) => d.day === day)?.isFinished
                            ? '✅'
                            : '❌'
                        : ''} */}
                </span>
            </div>
        </>
    );
};

export default ReadOnlyDay;
