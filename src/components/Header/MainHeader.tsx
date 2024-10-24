import { TODAY } from '@/constant/dayjs';
import { HOME } from '@/constant/pathname';
import Link from 'next/link';

const MainHeader = () => {
    return (
        <header className='flex justify-between items-center pt-4 px-4 '>
            <Link href={HOME} className='text-2xl font-bold'>
                On Habit
            </Link>
            <Link href={HOME} className='title'>
                {`${TODAY.month} ${TODAY.day}`}
            </Link>
        </header>
    );
};

export default MainHeader;
