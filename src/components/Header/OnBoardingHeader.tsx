'use client';

import useProgressStore from '@/stores/progress.store';
import Progress from '../Progress';

const OnBoardingHeader = () => {
    const progress = useProgressStore((state) => state.progress);
    const step = useProgressStore((state) => state.step);
    return (
        <header className='flex-vertical mt-4 gap-y-2'>
            <p className='text-right'>
                {progress}/{step}
            </p>
            <Progress />
        </header>
    );
};

export default OnBoardingHeader;
