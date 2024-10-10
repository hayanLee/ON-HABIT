import { PropsWithChildren } from 'react';

const CardContainer = ({ children }: PropsWithChildren) => {
    return <div className='px-5 py-4 bg-slate-400 rounded'>{children}</div>;
};

export default CardContainer;
