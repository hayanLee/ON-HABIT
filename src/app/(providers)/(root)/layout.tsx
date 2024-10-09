import { PropsWithChildren } from 'react';

const RootLayout = ({ children }: PropsWithChildren) => {
    return <div className='mx-auto w-[375px] h-dvh bg-yellow-100 md:w-[450px]'>{children}</div>;
};

export default RootLayout;
