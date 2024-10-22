'use client';
import Week from '@/components/Week';
import { useDay } from '@/contexts/day.context';
import { useHabitsQuery } from '@/hooks/queries';
import Habit from './habit/_components/Habit';

const HomePage = () => {
    const { selectedDay } = useDay();
    const { data: habits, isPending } = useHabitsQuery(selectedDay);
    if (isPending) return <div>loading..</div>;

    return (
        <div className='flex flex-col'>
            <Week />

            <h3 className='title mt-4'>My Habits</h3>

            <div className='flex flex-col w-full'>
                {habits?.map((habit, idx) => (
                    <Habit key={idx} habit={habit} day={selectedDay} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;
