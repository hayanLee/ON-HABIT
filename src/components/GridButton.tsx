import { PropsWithChildren } from 'react';

const GridButton = ({ children }: PropsWithChildren) => {
    return <button className='aspect-square border rounded 6'>{children}</button>;
};

export default GridButton;
