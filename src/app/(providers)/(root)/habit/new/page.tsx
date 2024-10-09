import Button from '@/components/Button';
import Header from '@/components/Header';
import Input from '@/components/Input';

const NewHabitPage = () => {
    return (
        <div className='flex flex-col gap-y-6'>
            <Header />

            <Input placeholder='Habit name' />

            <div>
                <h3 className='title my-6'>Set periodicity</h3>
                <div className='w-full h-10 bg-blue-200'></div>
            </div>

            <h3 className='title my-6'>When should we remind you?</h3>
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
