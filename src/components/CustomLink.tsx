import Link from 'next/link';
import { PropsWithChildren } from 'react';

interface CustomLinkProps extends PropsWithChildren {
    href: string;
}

const CustomLink = ({ children, href }: CustomLinkProps) => {
    return (
        <Link href={href} className='bg-orange-200 w-full inline-block text-center'>
            {children}
        </Link>
    );
};

export default CustomLink;
