import CustomLink from '@/components/CustomLink';
import GridButton from '@/components/GridButton';
import { ONBOARDING_REMINDER } from '@/constant/pathname';

const CategoryPage = () => {
    return (
        <div>
            <div>
                <h2 className='text-xl font-bold'>what habits do you want to work on?</h2>
                <p className='text-base'>Choose one or more habits.</p>
            </div>

            <div className='grid grid-cols-2 mt-6 gap-6'>
                <GridButton>workout</GridButton>
                <GridButton>Read more</GridButton>
                <GridButton>Take Picture</GridButton>
                <GridButton>Planning</GridButton>
            </div>

            <div className='flex justify-between'>
                <CustomLink href={ONBOARDING_REMINDER}>next</CustomLink>
            </div>
        </div>
    );
};

export default CategoryPage;
