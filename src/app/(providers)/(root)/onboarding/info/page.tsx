'use client';
import Button from '@/components/Button';
import useProgressStore from '@/stores/progress.store';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

export type InfoFormValues = {
    nickname: string;
    birth: string;
    location: string;
};

const InfoPage = () => {
    const setProgress = useProgressStore((state) => state.setProgress);
    useEffect(() => {
        setProgress(1);
    }, [setProgress]);

    const {
        register,
        handleSubmit,
        formState: { isValid, isDirty, errors },
    } = useForm<InfoFormValues>({
        defaultValues: {
            nickname: '',
            birth: '',
            location: 'seoul',
        },
        mode: 'onChange',
    });
    const router = useRouter();

    const onSubmit = async (data: InfoFormValues) => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user`, {
            method: 'PATCH',
            body: JSON.stringify(data),
        });
        if (response.ok) router.push('/onboarding/category');
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
                {/* {errors.nickname && <p className='text-blue-300'>{errors.nickname?.message}</p>} */}
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
                        {...register('location')}
                        className='col-span-2 p-4 bg-inherit border-b border-secondary'
                    >
                        <option value='seoul'>서울</option>
                        <option value='busan'>부산</option>
                        <option value='daegu'>대구</option>
                        <option value='incheon'>인천</option>
                        <option value='gwangju'>광주</option>
                        <option value='daejeon'>대전</option>
                        <option value='ulsan'>울산</option>
                        <option value='gangwon'>강원</option>
                        <option value='gyeonggi'>경기</option>
                        <option value='gyeongnam'>경남</option>
                        <option value='gyeongbuk'>경북</option>
                        <option value='jeonnam'>전남</option>
                        <option value='jeonbuk'>전북</option>
                        <option value='jeju'>제주</option>
                        <option value='chungnam'>충남</option>
                        <option value='chungbuk'>충북</option>
                    </select>
                </label>
                <Button disabled={!isValid || !isDirty}>Next</Button>
            </form>
        </>
    );
};

export default InfoPage;
