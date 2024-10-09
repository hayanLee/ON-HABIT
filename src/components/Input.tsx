interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    type?: string;
}
const Input = ({ type = 'string', ...props }: InputProps) => {
    return <input type={type} {...props} className='w-full rounded px-5 py-3' />;
};

export default Input;
