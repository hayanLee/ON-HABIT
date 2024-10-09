'use client';

import { useRouter } from 'next/navigation';

const Header = () => {
    const router = useRouter();

    const handleClick = () => {
        router.back();
    };

    return (
        <header className='flex justify-between'>
            <button onClick={handleClick}>⬅</button>
            <p>1/4</p>
        </header>
    );
};

export default Header;
