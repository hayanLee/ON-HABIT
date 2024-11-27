import clsx from 'clsx';

interface ReadOnlyDayProps {
    day: string;
    isComplete?: boolean;
}

const ReadOnlyDay = ({ day, isComplete }: ReadOnlyDayProps) => {
    return (
        <>
            <span className='subtitle'>{day}</span>
            <div className={clsx('day cursor-default', isComplete && 'checked')}>
                {isComplete === undefined ? '-' : isComplete ? '✅' : '❌'}
            </div>
        </>
    );
};

export default ReadOnlyDay;
