import { useTranslations } from 'next-intl';

export default function NotFoundPage() {
    const t = useTranslations('Errors');

    return (
        <main className="h-screen w-screen flex items-center justify-center">
            <h1 className="text-xl">
                <span className=" text-secondary-black font-bold">404</span> | {t('404')}
            </h1>
        </main>
    );
}
