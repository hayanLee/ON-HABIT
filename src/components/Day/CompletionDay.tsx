import { HabitInfo } from '@/types/Habit';
import clsx from 'clsx';
interface FinishedDayProps {
    day: string;
    habit: HabitInfo;
}
const CompletionDay = ({ day, habit }: FinishedDayProps) => {
    return (
        <>
            <span className='subtitle'>{day}</span>
            <div className={clsx('day cursor-default', habit?.scheduledDays.includes(day) && 'checked')}>
                <span className='subtitle'>
                    {habit?.scheduledDays.includes(day)
                        ? habit?.habitDays.find((d) => d.day === day)?.isFinished
                            ? '✅'
                            : '❌'
                        : ''}
                </span>
            </div>
        </>
    );
};

export default CompletionDay;
