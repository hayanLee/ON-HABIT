'use client';
import CustomLink from '@/components/CustomLink';
import { HABIT_NEW, HOME, MYPAGE } from '@/constant/pathname';
import { usePathname } from 'next/navigation';
import { PropsWithChildren } from 'react';

const RootLayout = ({ children }: PropsWithChildren) => {
    const pathname = usePathname();
    const isLoginOrOnboarding = pathname.startsWith('/login') || pathname.startsWith('/onboarding');
    return (
        <div className='flex flex-col mx-auto w-[375px] h-dvh bg-yellow-100  md:w-[450px]'>
            <div className='p-6 grow'>{children}</div>

            {!isLoginOrOnboarding && (
                <div className='h-16 w-full flex justify-around'>
                    <CustomLink href={HOME}>🏠</CustomLink>
                    <CustomLink href={HABIT_NEW}>✏️</CustomLink>
                    <CustomLink href={MYPAGE}>📊</CustomLink>
                </div>
            )}
        </div>
    );
};

export default RootLayout;
