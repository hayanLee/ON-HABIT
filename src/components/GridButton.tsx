interface GridButtonProps {
    id: string;
    children: React.ReactNode;
}

const GridButton = ({ id, children, ...props }: GridButtonProps) => {
    return (
        <button id={id} {...props} className='aspect-square border rounded-xl hover:bg-red-100'>
            {children}
        </button>
    );
};

export default GridButton;
