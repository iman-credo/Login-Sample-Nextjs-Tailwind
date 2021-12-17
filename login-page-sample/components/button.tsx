import * as React from 'react';


interface ButtonProps {
    lable: string,
    children?: React.ReactNode,
    onClick(): void
}
const Button = (props: ButtonProps) => {
    return <div>
        <button
            type='button'
            className='bg-red-700 rounded border hover:bg-red-400 text-white appearance-none px-4 py-2 w-full'
            onClick={props.onClick}>
            {
                props.lable
            }
        </button>
    </div>
}

export default Button;