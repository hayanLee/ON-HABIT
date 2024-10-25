'use client';
import MainHeader from '@/components/Header/MainHeader';
import { HABIT_NEW, HOME, MYPAGE } from '@/constant/pathname';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

interface RootLayoutProps {
    modal: ReactNode;
    children: React.ReactNode;
}

const RootLayout = ({ children, modal }: RootLayoutProps) => {
    const pathname = usePathname();
    const isLoginOrOnboarding = pathname.startsWith('/login') || pathname.startsWith('/onboarding');

    return (
        <div className='flex-vertical mx-auto w-[375px] h-dvh bg-background md:w-[450px]'>
            {!isLoginOrOnboarding && <MainHeader />}
            <div className='px-6 grow overflow-y-auto scrollbar-hide'>{children}</div>
            {modal}
            {!isLoginOrOnboarding && (
                <div className='bg-secondary h-16 w-inherit flex items-center justify-around'>
                    <Link href={HOME}>🏠</Link>
                    <Link href={HABIT_NEW}>
                        <div className='flex-center bg-main rounded-full w-[40px] h-[40px]'>
                            <span>✏️</span>
                        </div>
                    </Link>
                    <Link href={MYPAGE}>🙂</Link>
                </div>
            )}
        </div>
    );
};

export default RootLayout;
