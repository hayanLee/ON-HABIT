'use client';
import CustomLink from '@/components/CustomLink';
import MainHeader from '@/components/Header/MainHeader';
import { HABIT_NEW, HOME, MYPAGE } from '@/constant/pathname';
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
                <div className='bg-secondary h-20 w-inherit flex items-center justify-around'>
                    <CustomLink href={HOME}>🏠</CustomLink>
                    <CustomLink href={HABIT_NEW}>+</CustomLink>
                    <CustomLink href={MYPAGE}>🙂</CustomLink>
                </div>
            )}
        </div>
    );
};

export default RootLayout;
