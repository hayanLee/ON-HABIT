import Habit from './habit/_components/Habit';

const HomePage = () => {
    return (
        <div>
            <header className='flex relative'>
                <span className='grow text-center'>Oct 10</span>
                <div className='w-8 h-8 bg-red-200 absolute right-0'>😛</div>
            </header>

            <div className='my-6 w-full h-10 bg-blue-200'></div>

            <h3>My Habits</h3>

            <div className='w-full'>
                <Habit />
                <Habit />
                <Habit />
                <div className='py-4 border-b-2'>
                    <div className='flex'>
                        <h4 className='grow'>Read 10 pages of a book</h4>
                        <input type='checkbox' checked />
                    </div>
                    <button disabled className='bg-slate-500 text-white rounded'>
                        unusally completed at 10:15 pm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
