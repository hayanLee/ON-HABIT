interface GridButtonProps {
    id: string;
    children: React.ReactNode;
    className?: string;
}

const GridButton = ({ id, children, className, ...props }: GridButtonProps) => {
    return (
        <button
            id={id}
            {...props}
            className={`bg-secondary brightness-110 aspect-square rounded-xl hover:checked hover:bg-inherit ${className}`}
        >
            {children}
        </button>
    );
};

export default GridButton;
