interface GridButtonProps {
    id: string;
    children: React.ReactNode;
}

const GridButton = ({ id, children, ...props }: GridButtonProps) => {
    return (
        <button
            id={id}
            {...props}
            className='bg-secondary brightness-110 aspect-square rounded-xl hover:checked hover:bg-inherit '
        >
            {children}
        </button>
    );
};

export default GridButton;
