import NavLink from '@/components/layout/NavLink';
import { NextIntlClientProvider, useMessages, useTranslations } from 'next-intl';
import pick from 'lodash/pick';

type Props = {
    children: React.ReactNode;
};

export default function AuthLayout({ children }: Props) {
    const messages = useMessages();
    const t = useTranslations('Home');

    return (
        <main className="flex min-h-screen items-center justify-center text-white">
            <div className="flex flex-col p-10 bg-[#00000030] shadow-xl">
                <div className="mb-8 flex justify-center text-xl font-bold gap-4">
                    <NavLink href="/login">{t('login')}</NavLink>
                    <NavLink href="/register">{t('register')}</NavLink>
                </div>
                <NextIntlClientProvider
                    messages={pick(messages, 'Auth', 'Errors', 'RegisterSchema')}
                >
                    {children}
                </NextIntlClientProvider>
            </div>
        </main>
    );
}
