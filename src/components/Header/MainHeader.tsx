import { TODAY } from '@/constant/dayjs';
import { HOME } from '@/constant/pathname';
import Link from 'next/link';

const MainHeader = () => {
    return (
        <header className='flex justify-between items-center my-4 px-6 '>
            <Link href={HOME} className='text-2xl font-bold'>
                <h1>On Habit</h1>
            </Link>
            <Link href={HOME} className='title'>
                {`${TODAY.month} ${TODAY.day}`}
            </Link>
        </header>
    );
};

export default MainHeader;
