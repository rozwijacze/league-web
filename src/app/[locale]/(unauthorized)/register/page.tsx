'use client';

import * as yup from 'yup';
import Link from 'next/link';
import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { register as registerUser } from '@/libs/auth';

export default function RegisterForm() {
    const t = useTranslations('Auth');
    const tErrors = useTranslations('Errors');
    const tSchema = useTranslations('RegisterSchema');
    const [isRegistered, setIsRegistered] = useState(false);
    const [serverError, setServerError] = useState('');

    const registerSchema = yup.object().shape({
        nickname: yup.string().min(3, tSchema('nickShort')).max(16, tSchema('nickLong')),
        name: yup.string().min(2, tSchema('nameShort')).max(20, tSchema('nameLong')),
        surname: yup.string().min(3, tSchema('surnameShort')).max(25, tSchema('surnameLong')),
        email: yup.string().max(64, tSchema('emailLong')),
        password: yup.string().min(7, tSchema('passwordShort')).max(32, tSchema('passwordLong')),
        repeatPassword: yup.string().oneOf([yup.ref('password')], tSchema('passwordMismatch'))
    });

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(registerSchema)
    });

    async function onSubmit({ nickname, name, surname, email, password }: FieldValues) {
        resetStatus();

        await registerUser(nickname, name, surname, email, password).then(response => {
            if (response.success) {
                setIsRegistered(true);
                reset();
            } else {
                setServerError(response.error || tErrors('connection'));
            }
        });
    }

    function resetStatus() {
        setIsRegistered(false);
        setServerError('');
    }

    return (
        <>
            <form className="space-y-10 text-lg" onSubmit={handleSubmit(onSubmit)} method="POST">
                <div className="flex flex-col">
                    <label htmlFor="nickname">{t('nickname')}</label>
                    <p className="text-red-500">{errors.nickname?.message}</p>
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
                    <label htmlFor="name">{t('name')}</label>
                    <p className="text-red-500">{errors.name?.message}</p>
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
                    <label htmlFor="surname">{t('surname')}</label>
                    <p className="text-red-500">{errors.surname?.message}</p>
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
                    <label htmlFor="email">{t('email')}</label>
                    <p className="text-red-500">{errors.email?.message}</p>
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
                    <label htmlFor="password">{t('password')}</label>
                    <p className="text-red-500">{errors.password?.message}</p>
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
                    <label htmlFor="repeatPassword">{t('passwordRepeat')}</label>
                    <p className="text-red-500">{errors.repeatPassword?.message}</p>
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
                        {t('register')}
                    </button>

                    <Link
                        href="/"
                        className="w-full bg-secondary-brown uppercase font-bold px-2 py-3 text-center"
                    >
                        {t('back')}
                    </Link>
                </div>
            </form>
            {isRegistered && (
                <p className="text-green-600 text-center mt-10">{t('registerSuccess')}</p>
            )}
            {serverError && <p className="text-red-500 text-center mt-10">{serverError}</p>}
        </>
    );
}
