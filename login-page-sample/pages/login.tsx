import * as React from 'react';
import { NextPage } from 'next';
import TextField from '../components/textField';
import PasswordField from '../components/passwordField';
import Button from '../components/button';

interface LoginProps {

}
const Login: NextPage = (props: LoginProps) => {

    const [username, setUsername] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');

    const handleUsernameChange = (value: string) => {
        setUsername(value);
    }

    const handlePasswordChange = (value: string) => {
        setPassword(value)
    }

    const handleSubmit = () => {
        //Api call for login authentication goes here
        console.log('data is: ', username + ' ' + password);

    }

    return <div className='h-screen flex justify-center items-center'>
        <div className="max-w-md w-full space-y-8 y-3/4">
            <div className='w-full h-4/5 shadow rounded p-5 bg-gray-100 justify-center'>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 p-5">
                    Sign in to your account
                </h2>
                <div className='grid grid-cols-1 grid-rows-3 justify-items-center'>
                    <div className=''>
                        <TextField label='Username' onChange={handleUsernameChange} />
                    </div>
                    <div>
                        <PasswordField label='Password' onChange={handlePasswordChange} />
                    </div>
                    <div>
                        <Button lable='Sign in' onClick={handleSubmit} />
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Login;