'use client';

import { usePathname, useRouter } from 'next/navigation';

const OnBoardingHeader = () => {
    const router = useRouter();
    const pathname = usePathname();
    const isOnboarding = pathname.startsWith('/onboarding');

    const handleClick = () => {
        router.back();
    };

    return (
        <header className='flex justify-between my-4'>
            <button onClick={handleClick}>⬅</button>
            {isOnboarding ? <p>1/4</p> : <h3>Add new habit</h3>}
        </header>
    );
};

export default OnBoardingHeader;
