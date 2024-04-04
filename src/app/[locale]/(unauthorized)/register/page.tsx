'use client';

import Link from 'next/link';
import { FieldValues, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
// import { useAuthContext } from '@contexts/AuthContext';

export default function RegisterForm() {
    const [isRegistered, setIsRegistered] = useState(false);
    const [serverError, setServerError] = useState('');
    // const authContextValues = useAuthContext();

    const registerSchema = yup.object().shape({
        nickname: yup.string().min(3).max(16).required(),
        name: yup
            .string()
            .test('empty-check', 'Name must be at least 2 characters', name =>
                name ? name.length >= 2 || name.length == 0 : true
            ),
        surname: yup
            .string()
            .test('empty-check', 'Surname must be at least 3 characters', surname =>
                surname ? surname.length >= 3 || surname.length == 0 : true
            ),
        email: yup.string().max(64).email().required(),
        password: yup.string().min(7).max(32).required(),
        repeatPassword: yup.string().oneOf([yup.ref('password')], 'Repeat password')
    });

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(registerSchema)
    });

    function onSubmit(data: FieldValues) {
        console.log(data);

        // resetStatus();
        // const { nickname, name, surname, email, password } = data;

        // authContextValues.register(nickname, name, surname, email, password).then(response => {
        //     if (response.success) {
        //         setIsRegistered(true);
        //         reset();
        //     } else {
        //         setServerError(response.error || labels.register.results.unusualError);
        //     }
        // });
    }

    // function resetStatus() {
    //     setIsRegistered(false);
    //     setServerError('');
    // }

    return (
        <>
            <form className="space-y-10 text-lg" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col">
                    <label htmlFor="nickname">Nickname</label>
                    <p>{errors.nickname?.message}</p>
                    <input
                        {...register('nickname')}
                        required
                        type="text"
                        id="nickname"
                        name="nickname"
                        autoComplete="nickname"
                        className="outline-none bg-transparent border-b-2 border-b-slate-200 py-1 px-2 text-secondary-black font-bold"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="name">Name</label>
                    <p>{errors.name?.message}</p>
                    <input
                        {...register('name')}
                        type="text"
                        id="name"
                        name="name"
                        autoComplete="given-name"
                        className="outline-none bg-transparent border-b-2 border-b-slate-200 py-1 px-2 text-secondary-black font-bold"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="surname">Surname</label>
                    <p>{errors.surname?.message}</p>
                    <input
                        {...register('surname')}
                        type="text"
                        id="surname"
                        name="surname"
                        autoComplete="family-name"
                        className="outline-none bg-transparent border-b-2 border-b-slate-200 py-1 px-2 text-secondary-black font-bold"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="email">E-mail</label>
                    <p>{errors.email?.message}</p>
                    <input
                        {...register('email')}
                        required
                        type="email"
                        id="email"
                        name="email"
                        autoComplete="email"
                        className="outline-none bg-transparent border-b-2 border-b-slate-200 py-1 px-2 text-secondary-black font-bold"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="password">Password</label>
                    <p>{errors.password?.message}</p>
                    <input
                        {...register('password')}
                        required
                        type="password"
                        id="password"
                        name="password"
                        autoComplete="current-password"
                        className="outline-none bg-transparent border-b-2 border-b-slate-200 py-1 px-2 text-secondary-black font-bold"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="repeatPassword">Repeat password</label>
                    <p>{errors.repeatPassword?.message}</p>
                    <input
                        required
                        {...register('repeatPassword')}
                        type="password"
                        id="repeatPassword"
                        name="repeatPassword"
                        autoComplete="current-password"
                        className="outline-none bg-transparent border-b-2 border-b-slate-200 py-1 px-2 text-secondary-black font-bold"
                    />
                </div>

                <div className="flex gap-4">
                    <button
                        className="w-full bg-secondary-brown uppercase font-bold px-2 py-3"
                        type="submit"
                    >
                        Register
                    </button>

                    <Link
                        href="/"
                        className="w-full bg-secondary-brown uppercase font-bold px-2 py-3 text-center"
                    >
                        Back
                    </Link>
                </div>
            </form>
            {/* {isRegistered && <p className="register__result register__result--success">{labels.register.results.succeed}</p>}
            {serverError && <p className="register__result register__result--fail">{serverError}</p>} */}
        </>
    );
}
