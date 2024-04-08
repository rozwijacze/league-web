'use client';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { login } from '@/libs/auth';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

type LoginForm = {
    email: string;
    password: string;
};

export default function LoginForm() {
    const t = useTranslations('Auth');
    const tErrors = useTranslations('Errors');
    const router = useRouter();
    const [serverError, setServerError] = useState('');

    const loginSchema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().required()
    });

    const { register, handleSubmit } = useForm<LoginForm>({
        resolver: yupResolver(loginSchema)
    });

    async function onSubmit({ email, password }: LoginForm) {
        await login(email, password).then(response => {
            if (response.success) {
                router.push('/dashboard');
            } else {
                setServerError(response.error || tErrors('connection'));
            }
        });
    }

    return (
        <>
            <form className="space-y-10 text-lg" onSubmit={handleSubmit(onSubmit)} method="POST">
                <div className="flex flex-col">
                    <label>{t('email')}</label>
                    <input
                        {...register('email')}
                        type="email"
                        name="email"
                        autoComplete="email"
                        className="outline-none bg-transparent border-b-2 border-b-slate-200 py-1 px-2 text-secondary-black font-bold"
                    />
                </div>

                <div className="flex flex-col">
                    <label>{t('password')}</label>
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
                    {t('login')}
                </button>
            </form>
            {serverError && <p className="text-red-500 text-center mt-10">{serverError}</p>}
        </>
    );
}
