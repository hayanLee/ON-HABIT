import clsx from 'clsx';

interface ButtonProps {
    disabled?: boolean;
    children: React.ReactNode;
}

const Button = ({ disabled = true, children }: ButtonProps) => {
    return (
        <button
            className={clsx(
                'w-full bg-main py-2 rounded-full text-base font-semibold hover:brightness-110',
                disabled && 'bg-secondary brightness-110 '
            )}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
