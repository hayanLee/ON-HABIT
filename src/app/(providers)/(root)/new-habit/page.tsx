'use client';
import Button from '@/components/Button';
import Week from '@/components/Week';
import { FieldValues, useForm } from 'react-hook-form';

const NewHabitPage = () => {
    const { register, handleSubmit, formState, setValue } = useForm({ mode: 'onChange' });

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const btn = e.target as HTMLButtonElement;
        const target = btn.closest('button');

        if (target) setValue('days', target.id);
    };

    const onSubmit = (data: FieldValues) => {
        console.log(data);
    };
    return (
        <div className='h-full'>
            <form className='flex flex-col gap-y-6' onSubmit={handleSubmit(onSubmit)}>
                <input
                    type='text'
                    placeholder='Habit name'
                    {...register('HabitName', { required: 'Habit Name is required' })}
                />

                <div>
                    <h3 className='title'>Set periodicity</h3>
                    <Week onClick={handleClick} />
                    <input type='hidden' {...register('days', { required: 'Selected Day is required' })} />
                </div>

                <div>
                    <h3 className='title'>When should we remind you?</h3>
                    <div className='flex'>
                        <input {...register('time', { required: true })} id='morning' type='radio' value='Morning' />
                        <label htmlFor='morning'>Morning</label>
                        <input {...register('time', { required: true })} id='noon' type='radio' value='Noon' />
                        <label htmlFor='noon'>Noon</label>
                        <input {...register('time', { required: true })} id='evening' type='radio' value='Evening' />
                        <label htmlFor='evening'>Evening</label>
                    </div>
                </div>

                <Button disabled={!formState.isValid}>Add New Habit</Button>
            </form>
        </div>
    );
};

export default NewHabitPage;
