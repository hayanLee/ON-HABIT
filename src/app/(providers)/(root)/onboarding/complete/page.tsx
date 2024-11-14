'use client';
import Button from '@/components/Button';
import { HOME } from '@/constant/pathname';
import useProgressStore from '@/stores/progress.store';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const CompletePage = () => {
    const router = useRouter();
    const setProgress = useProgressStore((state) => state.setProgress);
    useEffect(() => {
        setProgress(4);
    }, [setProgress]);
    const handleButtonClick = () => router.push(HOME);
    return (
        <div>
            <div className='flex-col-center gap-y-4 my-10'>
                <p className='text-4xl'>✅</p>
                <h3 className='text-2xl font-bold'>You are all set!</h3>
            </div>
            <Button onClick={handleButtonClick} disabled={false}>
                Start Tracking
            </Button>
        </div>
    );
};

export default CompletePage;
