'use client';

import { usePathname, useRouter } from 'next/navigation';

const Header = () => {
    const router = useRouter();
    const pathname = usePathname();
    const isOnboarding = pathname.startsWith('/onboarding');

    const handleClick = () => {
        router.back();
    };

    return (
        <header className='flex justify-between'>
            <button onClick={handleClick}>⬅</button>
            {isOnboarding ? <p>1/4</p> : <h3>Add new habit</h3>}
        </header>
    );
};

export default Header;
