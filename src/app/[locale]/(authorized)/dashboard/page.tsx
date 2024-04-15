import { useTranslations } from 'next-intl';
import React from 'react';

type Props = {};

export default function Dashboard({}: Props) {
    const t = useTranslations('Dashboard');
    return (
        <>
            <p>Dashboard</p>
        </>
    );
}
