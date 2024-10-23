'use client';
import Loading from '@/components/Loading';
import Week from '@/components/Week';
import { useDayContext } from '@/contexts/day.context';
import { useHabitsQuery } from '@/hooks/queries';
import Habit from './habit/_components/Habit';

const HomePage = () => {
    const { selectedDay } = useDayContext();
    const { data: habits, isPending } = useHabitsQuery(selectedDay);

    if (isPending) return <Loading />;

    return (
        <div className='flex-vertical'>
            <Week />
            <>
                <h3 className='title mt-4'>My Habits</h3>
                <div className='flex-vertical w-full'>
                    {habits?.map((habit) => (
                        <Habit key={habit.id} habit={habit} day={selectedDay} />
                    ))}
                </div>
            </>
        </div>
    );
};

export default HomePage;
