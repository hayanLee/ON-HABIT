import CustomLink from '@/components/CustomLink';
import GridButton from '@/components/GridButton';
import { ONBOARDING_COMPLETE } from '@/constant/pathname';

const ReminderPage = () => {
    return (
        <div>
            <div>
                <h2 className='text-xl font-bold'>When do you want us to remind you?</h2>
            </div>

            <div className='grid grid-cols-2 mt-6 gap-6'>
                <GridButton>6:00 AM</GridButton>
                <GridButton>12:00 PM</GridButton>
                <GridButton>6:00 PM</GridButton>
            </div>

            <div className='flex justify-between'>
                <CustomLink href={ONBOARDING_COMPLETE}>next</CustomLink>
            </div>
        </div>
    );
};

export default ReminderPage;
