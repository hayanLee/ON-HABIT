import Day from '@/components/Day';
import MainHeader from '@/components/Header/MainHeader';
import Habit from './habit/_components/Habit';

const HomePage = () => {
    const days = Array(7).fill(null);
    const habits = Array(5).fill(null);

    return (
        <div>
            <MainHeader />

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
