'use client';
import Button from '@/components/Button';
import GridButton from '@/components/GridButton';
import { ONBOARDING_COMPLETE } from '@/constant/pathname';
import useCategoryStore from '@/stores/category.store';
import useProgressStore from '@/stores/progress.store';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const reminders = [
    { title: 'Morning', time: '6:00AM' },
    { title: 'Noon', time: '12:00PM' },
    { title: 'Evening', time: '6:00PM' },
];

const ReminderPage = () => {
    const router = useRouter();
    const [chosenTime, setChosenTime] = useState<string>('');

    const setProgress = useProgressStore((state) => state.setProgress);
    const chosenCategories = useCategoryStore((state) => state.chosenCategories);

    useEffect(() => {
        setProgress(3);
    }, [setProgress]);

    const handleCategoryClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const btn = e.target as HTMLElement;
        const target = btn.closest('button');
        const targetId = target?.id;

        if (!targetId) return;
        console.log(targetId);
        setChosenTime(targetId);
    };

    const onSubmit = async () => {
        const data = {
            chosenCategories,
            chosenTime,
        };

        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/onboarding`, {
            method: 'POST',
            body: JSON.stringify(data),
        });

        if (response.ok) router.push(ONBOARDING_COMPLETE);
    };
    return (
        <div>
            <div>
                <h2 className='title'>When do you want us to remind you?</h2>
            </div>
            <div className='grid grid-cols-2 my-6 gap-6' onClick={handleCategoryClick}>
                {reminders.map((reminder) => (
                    <GridButton
                        id={reminder.time}
                        key={reminder.title}
                        className={clsx(chosenTime === reminder.title && 'border border-main')}
                    >
                        <div>
                            <p className='text-4xl'>{reminder.time}</p>
                            <h4 className='subtitle'>{reminder.title}</h4>
                        </div>
                    </GridButton>
                ))}
            </div>
            <Button disabled={!chosenTime.length} onClick={onSubmit}>
                next
            </Button>
        </div>
    );
};

export default ReminderPage;
