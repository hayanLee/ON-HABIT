import { HOME } from '@/constant/pathname';
import dayjs from 'dayjs';
import Link from 'next/link';

const MainHeader = () => {
    const today = dayjs();
    const MONTH = today.format('MMM');
    const DAY = today.format('DD');

    return (
        <header className='flex justify-between items-center pt-4 px-4 '>
            <Link href={HOME} className='text-2xl font-bold'>
                On Habit
            </Link>
            <Link href={HOME} className='title'>{`${MONTH} ${DAY}`}</Link>
        </header>
    );
};

export default MainHeader;
