import { useTranslations } from 'next-intl';
import Link from 'next/link';

type Props = {
    children: React.ReactNode;
};

export default function AuthLayout({ children }: Props) {
    const t = useTranslations('Home');

    return (
        <main className="flex min-h-screen items-center justify-center text-white">
            <div className="flex flex-col p-10 bg-[#00000030] shadow-xl">
                <div className="mb-8 flex justify-center text-xl font-bold gap-4">
                    <Link
                        href="/"
                        className="underline underline-offset-8 decoration-4 decoration-primary-red"
                    >
                        {t('login')}
                    </Link>
                    <Link href="/register" className="text-secondary-black">
                        {t('register')}
                    </Link>
                </div>
                {children}
            </div>
        </main>
    );
}
