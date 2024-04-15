'use server';

import axios from 'axios';
import { encrypt } from './serverHelpers';
import { cookies } from 'next/headers';
import { getTranslations } from 'next-intl/server';

export async function login(email: string, password: string) {
    const t = await getTranslations('Errors');

    return axios
        .post(process.env.NEXT_USER_API + '/login', {
            email,
            password
        })
        .then(async response => {
            if (response.data.accessToken) {
                const user = { email, password };

                const expires = new Date(Date.now() + 10 * 1000);
                const session = await encrypt({ user, expires });
                cookies().set('session', session, { expires, httpOnly: true });

                return { success: true, error: '' };
            } else {
                return { success: false, error: t('expiredToken') };
            }
        })
        .catch(err => {
            const message = err.response.status === 401 ? t('invalidCredentials') : t('loginError');

            return { success: false, error: message };
        });
}

export async function register(
    nickname: string,
    name: string,
    surname: string,
    email: string,
    password: string
) {
    const t = await getTranslations('Errors');

    return axios
        .post(process.env.NEXT_USER_API + '/register', {
            nickname,
            name,
            surname,
            email,
            password
        })
        .then(() => ({ success: true, error: '' }))
        .catch(() => ({ success: false, error: t('registerError') }));
}
