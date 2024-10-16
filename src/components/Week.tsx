import dayjs from 'dayjs';
import Days from './Days';

interface WeekProps {
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const daysOfWeek = Array.from({ length: 7 }, (_, idx) => dayjs().day(idx).format('ddd'));
const Week = ({ onClick }: WeekProps) => {
    return (
        <div className='flex justify-between' onClick={onClick}>
            {daysOfWeek.map((day) => (
                <Days id={day} key={day} day={day} />
            ))}
        </div>
    );
};

export default Week;
