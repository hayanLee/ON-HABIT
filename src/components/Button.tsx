import { PropsWithChildren } from 'react';

const Button = ({ children }: PropsWithChildren) => {
    return <button className='text-base border w-full rounded bg-blue-200'>{children}</button>;
};

export default Button;
