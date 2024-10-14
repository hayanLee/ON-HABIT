'use client';
import Button from '@/components/Button';
import Day from '@/components/Day';
import { useRouter } from 'next/navigation';

const Modal = ({ params: { id } }: { params: { id: string } }) => {
    const router = useRouter();
    const handleClick = () => router.back();
    const days = Array(7).fill(null);

    return (
        <div className='bg-red-200 h-1/2 z-10 fixed w-inherit bottom-16 p-6'>
            <div className='flex '>
                <h2 className='grow title'>{id}</h2>
                <span className='inline-block' onClick={handleClick}>
                    ❌
                </span>
            </div>

            <div className='my-6 w-full flex justify-between'>
                {days.map((_, idx) => (
                    <Day key={idx} />
                ))}
            </div>

            <div>
                <p>This week you have {id} habit, 4 out of 7 days !</p>
                <p>Great job!</p>
            </div>

            <Button>See My statistics</Button>
        </div>
    );
};

export default Modal;
