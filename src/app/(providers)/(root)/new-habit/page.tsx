'use client';
import Button from '@/components/Button';
import Week from '@/components/Week';
import { useCreateHabitMutation } from '@/hooks/mutations';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';

export interface NewHabit {
    name: string;
    scheduledDays: string[];
    remind: string;
}

const NewHabitPage = () => {
    const { mutate } = useCreateHabitMutation();
    const {
        register,
        handleSubmit,
        formState: { isValid },
        setValue,
    } = useForm<NewHabit>({
        mode: 'onChange',
        defaultValues: {
            name: '',
            scheduledDays: [],
            remind: '',
        },
    });

    const handleClick = (days: string[]) => setValue('scheduledDays', days);
    const onSubmit = (formData: NewHabit) => mutate(formData);

    return (
        <div className='my-8'>
            <form className='flex-vertical gap-y-8' onSubmit={handleSubmit(onSubmit)}>
                <input
                    type='text'
                    placeholder='Enter New Habit'
                    {...register('name', { required: 'Habit Name is required' })}
                    className={clsx('p-4 bg-inherit border-b border-secondary')}
                />

                <div>
                    <h3 className='title'>Set periodicity</h3>
                    <Week onChangeDays={handleClick} inside />
                    <input type='hidden' {...register('scheduledDays', { required: 'scheduledDays is required' })} />
                </div>

                <div>
                    <h3 className='title'>When should we remind you?</h3>
                    <div className='flex'>
                        <input
                            {...register('remind', { required: true })}
                            id='morning'
                            type='radio'
                            name='remind'
                            value='morning'
                            className='hidden peer/morning'
                        />
                        <label htmlFor='morning' className='radio mr-2 peer-checked/morning:checked'>
                            Morning
                        </label>
                        <input
                            {...register('remind', { required: true })}
                            id='noon'
                            type='radio'
                            name='remind'
                            value='noon'
                            className='hidden peer/noon'
                        />
                        <label htmlFor='noon' className='radio mr-2 peer-checked/noon:checked'>
                            Noon
                        </label>
                        <input
                            {...register('remind', { required: true })}
                            id='evening'
                            type='radio'
                            name='remind'
                            value='evening'
                            className='hidden peer/evening'
                        />
                        <label htmlFor='evening' className='radio mr-2 peer-checked/evening:checked'>
                            Evening
                        </label>
                    </div>
                </div>

                <Button disabled={!isValid}>Add New Habit</Button>
            </form>
        </div>
    );
};

export default NewHabitPage;
