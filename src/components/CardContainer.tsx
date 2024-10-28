import { PropsWithChildren } from 'react';

const CardContainer = ({ children }: PropsWithChildren) => {
    return <div className='bg-secondary brightness-110 rounded-2xl p-6'>{children}</div>;
};

export default CardContainer;
