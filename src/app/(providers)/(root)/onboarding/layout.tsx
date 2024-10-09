import { PropsWithChildren } from 'react';
import Header from './_components/Header';

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
