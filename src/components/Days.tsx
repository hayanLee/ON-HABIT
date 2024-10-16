interface DaysProps {
    id: string;
    day: string;
    inside: boolean;
}
const Days = ({ id, day, inside }: DaysProps) => {
    return (
        <button className='flex-center flex-col' id={id}>
            {!inside && <span className='subtitle'>{day}</span>}
            <div className='flex-center w-11 h-11 rounded-full bg-violet-300'>
                {inside && <span className='font-medium'>{day}</span>}
            </div>
        </button>
    );
};

export default Days;
