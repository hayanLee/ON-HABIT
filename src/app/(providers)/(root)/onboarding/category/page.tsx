'use client';
import Button from '@/components/Button';
import GridButton from '@/components/GridButton';
import { ONBOARDING_REMINDER } from '@/constant/pathname';
import useProgressStore from '@/stores/progress.store';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const categories = [
    {
        title: 'Workout',
        icon: '💪',
    },
    {
        title: 'Read more',
        icon: '📚',
    },
    {
        title: 'Take Picture',
        icon: '📸',
    },
    {
        title: 'Planning',
        icon: '🗓️',
    },
    {
        title: 'Sleep early',
        icon: '🛌',
    },
    {
        title: 'Music lesson',
        icon: '🎶',
    },
    {
        title: 'Journalling',
        icon: '📝',
    },
    {
        title: 'Less social media',
        icon: '💻',
    },
];

const CategoryPage = () => {
    const router = useRouter();
    const [chosenCategories, setChosenCategories] = useState<string[]>([]);
    const setProgress = useProgressStore((state) => state.setProgress);
    useEffect(() => {
        setProgress(2);
    }, []);

    const handleCategoryClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const btn = e.target as HTMLElement;
        const target = btn.closest('button');
        const targetId = target?.id;

        if (!targetId) return;

        setChosenCategories((prev) =>
            prev.includes(targetId) ? chosenCategories.filter((ct) => ct !== targetId) : [...prev, targetId]
        );
    };

    const handleButtonClick = () => {
        console.log(chosenCategories);
        router.push(ONBOARDING_REMINDER);
    };
    return (
        <div>
            <div>
                <h2 className='title'>what habits do you want to work on?</h2>
                <p className='text-base'>Choose one or more habits.</p>
            </div>

            <div className='grid grid-cols-2 my-6 gap-6' onClick={handleCategoryClick}>
                {categories.map((category) => (
                    <GridButton
                        id={category.title}
                        key={category.title}
                        className={clsx(chosenCategories.includes(category.title) && 'border border-main')}
                    >
                        <div className='flex-vertical gap-y-2'>
                            <p className='text-4xl'>{category.icon}</p>
                            <h4 className='subtitle'>{category.title}</h4>
                        </div>
                    </GridButton>
                ))}
            </div>

            <Button disabled={!chosenCategories.length} onClick={handleButtonClick}>
                next
            </Button>
        </div>
    );
};

export default CategoryPage;
