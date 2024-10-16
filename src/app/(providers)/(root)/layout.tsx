'use client';
import CustomLink from '@/components/CustomLink';
import MainHeader from '@/components/Header/MainHeader';
import { HABIT_NEW, HOME, MYPAGE } from '@/constant/pathname';
import { usePathname } from 'next/navigation';
import { PropsWithChildren, ReactNode } from 'react';

interface RootLayoutProps extends PropsWithChildren {
    modal: ReactNode;
}

const RootLayout = ({ children, modal }: RootLayoutProps) => {
    const pathname = usePathname();
    const isLoginOrOnboarding = pathname.startsWith('/login') || pathname.startsWith('/onboarding');

    return (
        <div className='flex flex-col mx-auto w-[375px] h-dvh bg-yellow-100 md:w-[450px]'>
            {!isLoginOrOnboarding && <MainHeader />}
            <div className='px-6 pt-6 grow overflow-y-auto scrollbar-hide'>{children}</div>
            {modal}
            {!isLoginOrOnboarding && (
                <div className='h-16 w-inherit flex justify-around'>
                    <CustomLink href={HOME}>🏠</CustomLink>
                    <CustomLink href={HABIT_NEW}>✏️</CustomLink>
                    <CustomLink href={MYPAGE}>📊</CustomLink>
                </div>
            )}
        </div>
    );
};

export default RootLayout;
