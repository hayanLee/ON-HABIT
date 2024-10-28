import OnBoardingHeader from '@/components/Header/OnBoardingHeader';
import { PropsWithChildren } from 'react';

const OnBoardingLayout = ({ children }: PropsWithChildren) => {
    return (
        <div className='flex-vertical h-full'>
            <div className='mb-6'>
                <OnBoardingHeader />
                <div className='h-2 bg-main rounded' />
            </div>
            <div className='grow overflow-y-auto scrollbar-hide'>{children}</div>
        </div>
    );
};

export default OnBoardingLayout;
