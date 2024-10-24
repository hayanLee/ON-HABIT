'use client';
import Button from '@/components/Button';
import Week from '@/components/Week';
import { useCreateHabitMutation } from '@/hooks/mutations';

import { useForm } from 'react-hook-form';

interface FormData {
    name: string;
    scheduledDays: string[];
    remind: string;
}

const NewHabitPage = () => {
    const { mutateAsync } = useCreateHabitMutation();
    const {
        register,
        handleSubmit,
        formState: { isValid },
        setValue,
    } = useForm<FormData>({
        mode: 'onChange',
        defaultValues: {
            name: '',
            scheduledDays: [],
            remind: '',
        },
    });

    const handleClick = (days: string[]) => setValue('scheduledDays', days);

    const onSubmit = async (formData: FormData) =>
        await mutateAsync({
            ...formData,
            habitDays: formData.scheduledDays.map((d) => ({ day: d, isFinished: false })),
        });

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
                    <input type='hidden' {...register('scheduledDays', { required: 'scheduledDays is required' })} />
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
