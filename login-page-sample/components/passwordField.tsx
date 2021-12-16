import * as React from 'react';


interface PasswordFieldProps {
    label: string
}
const PasswordField = (props: PasswordFieldProps) => {
    return <div>
        <label className="text-gray-700 text-sm font-bold mb-2 p-5">
            {props.label}
        </label>
        <input className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-red-400"
            type="password"
            placeholder={props.label} />
    </div>
}

export default PasswordField;