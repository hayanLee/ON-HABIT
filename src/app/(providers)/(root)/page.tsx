import Week from '@/components/Week';
import Habit from './habit/_components/Habit';

const HomePage = () => {
    const habits = Array(5).fill(null);

    return (
        <div className='flex flex-col'>
            <Week inside={false} />

            <h3 className='title mt-4'>My Habits</h3>

            <div className='flex flex-col w-full'>
                {habits.map((_, idx) => (
                    <Habit key={idx} id={idx} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;
