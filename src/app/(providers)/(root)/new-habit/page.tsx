import Button from '@/components/Button';
import Day from '@/components/Day';
import Header from '@/components/Header/OnBoardingHeader';
import Input from '@/components/Input';

const NewHabitPage = () => {
    const days = Array(7).fill(null);
    return (
        <div className='flex flex-col gap-y-6'>
            <Header />

            <Input placeholder='Habit name' />

            <div>
                <h3 className='title'>Set periodicity</h3>
                <div className='my-6 w-full flex justify-between'>
                    {days.map((_, idx) => (
                        <Day key={idx} />
                    ))}
                </div>
            </div>

            <h3 className='title'>When should we remind you?</h3>
            <div className='flex'>
                <Button>Morning</Button>
                <Button>Noon</Button>
                <Button>Evening</Button>
            </div>

            <Button>Add new habit</Button>
        </div>
    );
};

export default NewHabitPage;
