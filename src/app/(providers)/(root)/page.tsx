import Day from '@/components/Day';
import Habit from './habit/_components/Habit';

const HomePage = () => {
    const days = Array(7).fill(null);
    const habits = Array(10).fill(null);

    return (
        <div>
            <header className='flex relative'>
                <span className='grow text-center'>Oct 10</span>
                <div className='w-8 h-8 bg-red-200 absolute right-0'>😛</div>
            </header>

            <div className='my-6 w-full flex justify-between'>
                {days.map((_, idx) => (
                    <Day key={idx} />
                ))}
            </div>

            <h3 className='title'>My Habits</h3>

            <div className='w-full h-auto '>
                {habits.map((_, idx) => (
                    <Habit key={idx} id={idx} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;
