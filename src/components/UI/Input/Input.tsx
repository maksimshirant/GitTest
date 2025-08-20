import classNames from "classnames";
import type { InputHTMLAttributes } from "react";
import {InputText} from "primereact/inputtext";

type Size = 'sm' | 'md' | 'lg';
type Appearance = 'default' | 'error';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    size?: Size;
    appearance?: Appearance;
    value: string
}

const Input = ({ size = 'md', appearance = 'default', className, ...rest }: InputProps) => {
    return (

        <InputText
            className={classNames(
                'peer block rounded-md border transition outline-none w-1/2 bg-transparent mb-4',
                {
                    'h-8 px-2 text-sm': size === 'sm',
                    'h-10 px-3 text-base': size === 'md',
                    'h-12 px-4 text-lg': size === 'lg',

                    'border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100':
                        appearance === 'default',
                    'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-100':
                        appearance === 'error',


                },
                className
            )}
            {...rest}
        />

    );
};

export default Input;
