
import classNames from 'classnames';


interface Props {
    onClick: () => void;
    children: React.ReactNode;
    className?: string;
    appearance?:'primary' | 'secondary' | 'danger';
    size?: 's' | 'm' | 'l';
}

const Button = ({onClick, children, className, appearance = 'primary', size = 'm' }: Props) => {
    return (
        <button onClick={onClick} className={classNames(
            'px-4 py-2 rounded transition-all',
            {
                'bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700': appearance === 'primary',
                'bg-gray-300 text-black hover:bg-gray-400 active:bg-gray-700': appearance === 'secondary',
                'bg-red-500 text-white hover:bg-red-700 active:bg-red-900': appearance === 'danger',

                'px-2 py-1 text-sm': size === 's',
                'px-4 py-2 text-base': size === 'm',
                'px-10 py-5 text-lg': size === 'l',
            },
            className
        )}>
            {children}
        </button>
    );
};

export default Button;