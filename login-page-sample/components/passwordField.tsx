import * as React from 'react';


interface PasswordFieldProps {
    label: string,
    onChange(value: string): void
}
const PasswordField = (props: PasswordFieldProps) => {

    const handleChange = (e: any) => {
        props.onChange(e.target.value);
    }

    return <div>
        <input className="shadow appearance-none border rounded-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-red-700"
            type="password"
            placeholder={props.label}
            onChange={handleChange}>
        </input>
    </div>
}

export default PasswordField;