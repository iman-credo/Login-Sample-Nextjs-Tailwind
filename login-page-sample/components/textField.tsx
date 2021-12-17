import * as React from 'react';


interface TextFieldProps {
    label: string,
    onChange(value: any): void
}
const TextField = (props: TextFieldProps) => {

    const handleChange = (e: any) => {
        props.onChange(e.target.value);
    }

    return <div>
        <input className="shadow appearance-none border rounded-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-red-700"
            type="text"
            placeholder={props.label}
            onChange={handleChange} />
    </div>
}

export default TextField;