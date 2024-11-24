'use client';
import Loading from '@/components/Loading';
import Week from '@/components/Week';
import { useHabitsQuery } from '@/hooks/queries';
import { useDayStore } from '@/stores/store';
import Habit from './habit/_components/Habit';

const HomePage = () => {
    const { selectedDay } = useDayStore();
    const { data: habits, isPending } = useHabitsQuery(selectedDay);

    if (isPending) return <Loading />;

    return (
        <div className='flex-vertical'>
            <Week />
            <div className='mt-4'>
                <h3 className='title'>My Habits</h3>
                <div className='flex-vertical w-full'>
                    {habits?.map((habit) => (
                        <Habit key={habit.id} habit={habit} day={selectedDay} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomePage;
