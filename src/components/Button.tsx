import clsx from 'clsx';
import { ComponentProps } from 'react';

type ButtonProps = {
    disabled?: boolean;
    children: React.ReactNode;
} & ComponentProps<'button'>;

const Button = ({ disabled = true, children, ...props }: ButtonProps) => {
    return (
        <button
            className={clsx(
                'w-full bg-main py-2 rounded-full text-base font-semibold hover:brightness-110 cursor-pointer',
                disabled && 'bg-secondary brightness-110 cursor-auto'
            )}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
