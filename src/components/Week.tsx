import dayjs from 'dayjs';
import Days from './Days';

interface WeekProps {
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
    inside?: boolean;
}

const daysOfWeek = Array.from({ length: 7 }, (_, idx) => dayjs().day(idx).format('ddd'));
const Week = ({ onClick, inside = true }: WeekProps) => {
    return (
        <div className='flex justify-between' onClick={onClick}>
            {daysOfWeek.map((day) => (
                <Days id={day} key={day} day={day} inside={inside} />
            ))}
        </div>
    );
};

export default Week;
