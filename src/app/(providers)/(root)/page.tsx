'use client';
import Week from '@/components/Week';
import { useHabitsQuery } from '@/hooks/queries';
import Habit from './habit/_components/Habit';

const HomePage = () => {
    const { data: habits, isPending } = useHabitsQuery();
    if (isPending) return <div>loading..</div>;
    return (
        <div className='flex flex-col'>
            <Week inside={false} />

            <h3 className='title mt-4'>My Habits</h3>

            <div className='flex flex-col w-full'>
                {habits?.map((habit, idx) => (
                    <Habit key={idx} habit={habit} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;
