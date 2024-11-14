'use client';
import Button from '@/components/Button';
import { ONBOARDING_CATEGORY } from '@/constant/pathname';
import useProgressStore from '@/stores/progress.store';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

type Inputs = {
    [key: string]: string;
};

const InfoPage = () => {
    const setProgress = useProgressStore((state) => state.setProgress);
    useEffect(() => {
        setProgress(1);
    }, [setProgress]);

    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { isValid, isDirty },
    } = useForm<Inputs>({
        defaultValues: {
            nickname: '',
            birth: '',
            live: '1',
        },
        mode: 'onChange',
    });
    const onSubmit = (data: FieldValues) => {
        console.log(data);
        router.push(ONBOARDING_CATEGORY);
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className='flex-col-center gap-6'>
                <label htmlFor='nickname' className='grid grid-cols-3 items-center w-full'>
                    <span>Nickname</span>
                    <input
                        id='nickname'
                        type='text'
                        placeholder='Enter your nickname'
                        className={clsx('col-span-2 p-4 bg-inherit border-b border-secondary')}
                        {...register('nickname', {
                            required: 'Nickname is required',
                            minLength: { value: 2, message: 'Nickname must be at least 2 characters long' },
                            maxLength: { value: 12, message: 'Nickname cannot exceed 12 characters' },
                        })}
                    />
                </label>
                <label htmlFor='birth' className='grid grid-cols-3 items-center  w-full'>
                    <span>Birth</span>
                    <input
                        id='birth'
                        type='date'
                        placeholder='birth'
                        className={clsx('col-span-2 p-4 bg-inherit border-b border-secondary')}
                        {...register('birth', { required: 'Birth is required' })}
                        max={new Date().toISOString().split('T')[0]}
                    />
                </label>
                <label htmlFor='location' className='grid grid-cols-3 items-center  w-full'>
                    <span>Location</span>
                    <select
                        id='location'
                        {...register('live')}
                        className={clsx('col-span-2 p-4 bg-inherit border-b border-secondary')}
                    >
                        <option value='1'>서울</option>
                        <option value='2'>부산</option>
                        <option value='3'>대구</option>
                        <option value='4'>인천</option>
                        <option value='5'>광주</option>
                        <option value='6'>대전</option>
                        <option value='7'>울산</option>
                        <option value='8'>강원</option>
                        <option value='9'>경기</option>
                        <option value='10'>경남</option>
                        <option value='11'>경북</option>
                        <option value='12'>전남</option>
                        <option value='13'>전북</option>
                        <option value='14'>제주</option>
                        <option value='15'>충남</option>
                        <option value='16'>충북</option>
                    </select>
                </label>
                <Button disabled={!isValid || !isDirty}>Next</Button>
            </form>
        </>
    );
};

export default InfoPage;
