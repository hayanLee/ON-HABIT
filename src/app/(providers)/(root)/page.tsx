import Week from '@/components/Week';
import { LOCAL } from '@/constant/apiEndpoint';
import { HabitInfo } from '@/types/Habit';
import Habit from './habit/_components/Habit';

const HomePage = async () => {
    const response = await fetch(`${LOCAL}/api/habits`);
    const habits: HabitInfo[] = (await response.json()) || [];
    return (
        <div className='flex flex-col'>
            <Week inside={false} />

            <h3 className='title mt-4'>My Habits</h3>

            <div className='flex flex-col w-full'>
                {habits.map((habit, idx) => (
                    <Habit key={idx} habit={habit} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;
