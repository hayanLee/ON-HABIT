'use client';
import useProgressStore from '@/stores/progress.store';
import clsx from 'clsx';

const Progress = () => {
    const progress = useProgressStore((state) => state.progress);
    const step = useProgressStore((state) => state.step);
    return (
        <div className='w-full bg-gray-50 rounded-full h-3'>
            <div className={clsx(`bg-main h-3 rounded-full w-${progress}/${step} transition-all duration-500`)} />
        </div>
    );
};

export default Progress;