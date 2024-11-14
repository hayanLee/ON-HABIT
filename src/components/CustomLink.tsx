import { HABIT_NEW } from '@/constant/pathname';
import clsx from 'clsx';
import Link from 'next/link';

type CustomLinkProps = {
    href: string;
    children: React.ReactNode;
};

const CustomLink = ({ href, children }: CustomLinkProps) => {
    return (
        <Link href={href} className='w-full h-full inline-block flex-center'>
            <span className={clsx('text-2xl flex-center', href === HABIT_NEW && 'bg-main rounded-full w-12 h-12')}>
                {children}
            </span>
        </Link>
    );
};

export default CustomLink;
