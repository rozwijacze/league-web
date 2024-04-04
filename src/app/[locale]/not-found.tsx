import { useTranslations } from 'next-intl';

export default function NotFoundPage() {
    const t = useTranslations('ErrorPage');

    return (
        <main className="h-screen w-screen flex items-center justify-center">
            <h1 className="text-xl">
                <span className="text-white">404</span> | {t('message')}
            </h1>
        </main>
    );
}
