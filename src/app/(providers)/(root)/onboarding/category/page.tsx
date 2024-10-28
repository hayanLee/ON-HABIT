'use client';
import Button from '@/components/Button';
import GridButton from '@/components/GridButton';

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
                <h2 className='title'>what habits do you want to work on?</h2>
                <p className='text-base'>Choose one or more habits.</p>
            </div>

            <div className='grid grid-cols-2 my-6 gap-6' onClick={handleClick}>
                {categories.map((category) => (
                    <GridButton id={category.title} key={category.title}>
                        <div className='flex-vertical gap-y-2'>
                            <p className='text-4xl'>{category.icon}</p>
                            <h4 className='subtitle'>{category.title}</h4>
                        </div>
                    </GridButton>
                ))}
            </div>

            <Button>next</Button>
        </div>
    );
};

export default CategoryPage;
