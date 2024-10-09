'use client';
import { usePathname } from 'next/navigation';
import { PropsWithChildren } from 'react';

const RootLayout = ({ children }: PropsWithChildren) => {
    const pathname = usePathname();
    const isLoginOrOnboarding = pathname.startsWith('/login') || pathname.startsWith('/onboarding');
    return (
        <div className='flex flex-col mx-auto w-[375px] h-dvh bg-yellow-100  md:w-[450px]'>
            <div className='p-6 grow'>{children}</div>

            {!isLoginOrOnboarding && (
                <>
                    <div className='w-full bg-slate-500 flex justify-around'>
                        <button>🏠</button>
                        <button>✏️</button>
                        <button>📊</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default RootLayout;
