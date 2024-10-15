import CustomLink from '@/components/CustomLink';
import { HOME } from '@/constant/pathname';

const CompletePage = () => {
    return (
        <div>
            <div className='flex-col-center gap-y-4 my-10'>
                <p className='text-4xl'>✅</p>
                <h3 className='title'>You are all set!</h3>
            </div>
            <CustomLink href={HOME}>Start Tracking</CustomLink>
        </div>
    );
};

export default CompletePage;
