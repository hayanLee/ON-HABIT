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
            <div
                className={clsx(
                    'flex-center w-11 h-11 rounded-full',
                    habit?.scheduledDays.includes(day) ? 'bg-pink-50' : 'bg-gray-300'
                )}
            >
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
