'use client';
import Button from '@/components/Button';
import CustomLink from '@/components/CustomLink';

import { ONBOARDING_INFO } from '@/constant/pathname';

const LoginPage = () => {
    return (
        <main className='flex flex-col h-full justify-center'>
            <div className='mb-20'>
                <div className='aspect-square bg-pink-50'>이미지</div>
                <div className='flex-center flex-col my-2'>
                    <h1 className='text-2xl font-bold'>ON HABIT</h1>
                    <h3>Build habits and routines easily</h3>
                </div>
            </div>

            <div className='flex-center flex-col gap-6'>
                <CustomLink href={ONBOARDING_INFO}>Start</CustomLink>
                <Button>Sign Up with social</Button>
            </div>
        </main>
    );
};

export default LoginPage;
