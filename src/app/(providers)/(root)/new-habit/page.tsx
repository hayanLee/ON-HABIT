'use client';
import Button from '@/components/Button';
import Week from '@/components/Week';
import { useCreateHabit } from '@/hooks/mutations';

import { FieldValues, useForm } from 'react-hook-form';

const NewHabitPage = () => {
    const {
        register,
        handleSubmit,
        formState: { isValid },
        setValue,
    } = useForm({ mode: 'onChange' });

    const handleClick = (days: string[]) => {
        setValue('periods', days);
    };

    const { mutateAsync } = useCreateHabit();
    const onSubmit = async (formData: FieldValues) =>
        await mutateAsync({ ...formData, periods: formData.periods.map((d) => ({ day: d, isFinished: false })) });

    return (
        <div className='h-full'>
            <form className='flex flex-col gap-y-6' onSubmit={handleSubmit(onSubmit)}>
                <input
                    type='text'
                    placeholder='Habit name'
                    {...register('name', { required: 'Habit Name is required' })}
                />

                <div>
                    <h3 className='title'>Set periodicity</h3>
                    <Week onChangeDays={handleClick} inside />
                    <input type='hidden' {...register('periods', { required: 'Period is required' })} />
                </div>

                <div>
                    <h3 className='title'>When should we remind you?</h3>
                    <div className='flex'>
                        <input {...register('remind', { required: true })} id='morning' type='radio' value='Morning' />
                        <label htmlFor='morning'>Morning</label>
                        <input {...register('remind', { required: true })} id='noon' type='radio' value='Noon' />
                        <label htmlFor='noon'>Noon</label>
                        <input {...register('remind', { required: true })} id='evening' type='radio' value='Evening' />
                        <label htmlFor='evening'>Evening</label>
                    </div>
                </div>

                <Button disabled={!isValid}>Add New Habit</Button>
            </form>
        </div>
    );
};

export default NewHabitPage;
