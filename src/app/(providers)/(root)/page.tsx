import MainHeader from '@/components/Header/MainHeader';
import Week from '@/components/Week';
import Habit from './habit/_components/Habit';

const HomePage = () => {
    const habits = Array(5).fill(null);

    return (
        <div className='flex flex-col gap-y-4'>
            <MainHeader />

            <Week />

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
