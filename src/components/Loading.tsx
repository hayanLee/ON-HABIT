const Loading = () => {
    return (
        <div className='h-full flex flex-col items-center justify-center gap-y-4'>
            <div className='flex gap-x-2'>
                <span className='w-3 h-3 rounded-full bg-main animate-bounce' />
                <span className='w-3 h-3 rounded-full bg-main animate-bounce-delay-1' />
                <span className='w-3 h-3 rounded-full bg-main animate-bounce-delay-2' />
            </div>
            <p className='text-center subtitle'>"Consistency is the key to habit mastery."</p>
        </div>
    );
};

export default Loading;
