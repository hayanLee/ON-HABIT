'use client';
import Button from '@/components/Button';
import GridButton from '@/components/GridButton';
import useProgressStore from '@/stores/progress.store';
import { useEffect } from 'react';

const reminders = [
    { title: 'Morning', time: '6:00AM' },
    { title: 'Noon', time: '12:00PM' },
    { title: 'Evening', time: '6:00AM' },
];

const ReminderPage = () => {
    const setProgress = useProgressStore((state) => state.setProgress);
    useEffect(() => {
        setProgress(3);
    }, [setProgress]);
    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const btn = e.target as HTMLElement;
        const target = btn.closest('button');

        if (target) {
            console.log(target.id);
        }
    };
    return (
        <div>
            <div>
                <h2 className='title'>When do you want us to remind you?</h2>
            </div>

            <div className='grid grid-cols-2 my-6 gap-6' onClick={handleClick}>
                {reminders.map((reminder) => (
                    <GridButton id={reminder.title} key={reminder.title}>
                        <div>
                            <p className='text-4xl'>{reminder.time}</p>
                            <h4 className='subtitle'>{reminder.title}</h4>
                        </div>
                    </GridButton>
                ))}
            </div>

            <Button>next</Button>
        </div>
    );
};

export default ReminderPage;
