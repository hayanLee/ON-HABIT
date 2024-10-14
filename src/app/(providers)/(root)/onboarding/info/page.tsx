'use client';
import Button from '@/components/Button';
import { ONBOARDING_CATEGORY } from '@/constant/pathname';
import { useRouter } from 'next/navigation';
import { FieldValues, useForm } from 'react-hook-form';

type Inputs = {
    [key: string]: string;
};

const InfoPage = () => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors, isValid, isDirty },
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
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex-center flex-col gap-6'>
                <input
                    type='text'
                    placeholder='nickname'
                    className='w-full rounded px-5 py-3'
                    {...register('nickname', {
                        required: 'Nickname is required',
                        minLength: { value: 2, message: 'Nickname must be at least 2 characters long' },
                        maxLength: { value: 12, message: 'Nickname cannot exceed 12 characters' },
                    })}
                />
                {errors.nickname?.message && <span>{errors.nickname.message}</span>}
                <input
                    type='date'
                    placeholder='birth'
                    className='w-full rounded px-5 py-3'
                    {...register('birth', { required: 'Birth is required' })}
                    max={new Date().toISOString().split('T')[0]}
                />
                {errors.birth?.message && <span>{errors.birth.message}</span>}
                <select {...register('live')} className='w-full rounded px-5 py-3'>
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
                <Button disabled={!isValid || !isDirty}>Next</Button>
            </form>
        </div>
    );
};

export default InfoPage;
