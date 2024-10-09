import Header from '@/components/Header';
import { PropsWithChildren } from 'react';

const OnBoardingLayout = ({ children }: PropsWithChildren) => {
    return (
        <div>
            <div className='mb-6'>
                <Header />
                <h3>progress bar</h3>
            </div>
            {children}
        </div>
    );
};

export default OnBoardingLayout;
