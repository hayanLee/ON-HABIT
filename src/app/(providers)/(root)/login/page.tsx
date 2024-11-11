import Button from '@/components/Button';
import Image from 'next/image';
import Link from 'next/link';
import LogoSVG from '/public/Image/Logo.svg';
const LoginPage = () => {
    return (
        <main className='flex-col-center h-full'>
            <div className='mb-12'>
                <Image src={LogoSVG} alt='' className='aspect-square' />
                <div className='flex-center flex-col my-4 gap-y-2'>
                    <h1 className='text-3xl font-bold'>On Habit</h1>
                    <h3 className='text-text-secondary brightness-125'>Build habits and routines easily</h3>
                </div>
            </div>

            <Button disabled={false}>
                <Link
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/provider?provider=kakao`}
                    className='font-semibold inline-block'
                >
                    <span className='font-semibold'>Start with Kakao</span>
                </Link>
            </Button>
        </main>
    );
};

export default LoginPage;
