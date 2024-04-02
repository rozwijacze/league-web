'use client';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type LoginForm = {
    email: string;
    password: string;
};

export default function LoginForm() {
    const loginSchema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().required()
    });

    const { register, handleSubmit } = useForm<LoginForm>({
        resolver: yupResolver(loginSchema)
    });

    function onSubmit(data: LoginForm) {
        const { email, password } = data;

        console.log('Email: ', email);
        console.log('Password: ', password);

        // login(email, password).then(response => {
        //     if (!response.success) setServerError(response.error || labels.login.results.unusualError);
        // });
    }

    return (
        <form className="space-y-10 text-lg" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col">
                <label>Email</label>
                <input
                    {...register('email')}
                    type="email"
                    name="email"
                    autoComplete="email"
                    className="outline-none bg-transparent border-b-2 border-b-slate-200 py-1 px-2 text-secondary-black font-bold"
                />
            </div>

            <div className="flex flex-col">
                <label>Password</label>
                <input
                    {...register('password')}
                    type="password"
                    name="password"
                    autoComplete="current-password"
                    className="outline-none bg-transparent border-b-2 border-b-slate-200 py-1 px-2 text-secondary-black font-bold"
                />
            </div>

            <button
                className="w-full bg-secondary-brown uppercase font-bold px-2 py-3"
                type="submit"
            >
                Login
            </button>
        </form>
    );
}
