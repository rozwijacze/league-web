import { useTranslations } from 'next-intl';
import React from 'react';

type Props = {};

export default function Dashboard({}: Props) {
    const t = useTranslations('Dashboard');

    return (
        <main className="h-screen w-screen flex items-center justify-center">
            <h1 className="text-xl">{t('greeting')}</h1>
        </main>
    );
}
