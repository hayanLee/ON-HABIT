import CustomLink from '@/components/CustomLink';
import { HOME } from '@/constant/pathname';

const CompletePage = () => {
    return (
        <div className='flex-center flex-col'>
            <div className='aspect-square bg-blue-200'>Image</div>
            <h3 className='title'>You are all set!</h3>

            <CustomLink href={HOME}>Start Tracking</CustomLink>
        </div>
    );
};

export default CompletePage;
