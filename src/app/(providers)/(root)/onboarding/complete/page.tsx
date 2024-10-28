import Button from '@/components/Button';

const CompletePage = () => {
    return (
        <div>
            <div className='flex-col-center gap-y-4 my-10'>
                <p className='text-4xl'>✅</p>
                <h3 className='text-2xl font-bold'>You are all set!</h3>
            </div>
            <Button>Start Tracking</Button>
        </div>
    );
};

export default CompletePage;
