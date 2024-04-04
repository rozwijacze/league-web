import NavLink from '@/app/components/NavLink';
import { useTranslations } from 'next-intl';

type Props = {
    children: React.ReactNode;
};

export default function AuthLayout({ children }: Props) {
    const t = useTranslations('Home');

    return (
        <main className="flex min-h-screen items-center justify-center text-white">
            <div className="flex flex-col p-10 bg-[#00000030] shadow-xl">
                <div className="mb-8 flex justify-center text-xl font-bold gap-4">
                    <NavLink href="/">{t('login')}</NavLink>
                    <NavLink href="/register">{t('register')}</NavLink>
                </div>
                {children}
            </div>
        </main>
    );
}
