import Header from '@/components/Header';
import { PropsWithChildren } from 'react';

const OnBoardingLayout = ({ children }: PropsWithChildren) => {
    return (
        <div className='flex flex-col h-full'>
            <div className='mb-6'>
                <Header />
                <h3>progress bar</h3>
            </div>
            <div className='grow overflow-y-auto scrollbar-hide'>{children}</div>
        </div>
    );
};

export default OnBoardingLayout;
