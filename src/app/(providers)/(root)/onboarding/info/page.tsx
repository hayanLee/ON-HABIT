import CustomLink from '@/components/CustomLink';
import Input from '@/components/Input';
import { ONBOARDING_CATEGORY } from '@/constant/pathname';

const InfoPage = () => {
    return (
        <div>
            <div className='flex-center flex-col gap-6'>
                <Input placeholder='nickname' />
                <Input placeholder='birth' type='date' />
                <Input placeholder='live' />
            </div>

            <div className='flex justify-between'>
                <CustomLink href={ONBOARDING_CATEGORY}>next</CustomLink>
            </div>
        </div>
    );
};

export default InfoPage;
