import clsx from 'clsx';

interface ButtonProps {
    disabled?: boolean;
    children: React.ReactNode;
}

const Button = ({ disabled = true, children }: ButtonProps) => {
    return (
        <button
            className={clsx('text-base border w-full rounded bg-blue-200', disabled && 'bg-gray-200 ')}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
