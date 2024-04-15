import { useTranslations } from 'next-intl';
import React from 'react';

type Props = {};

export default function Dashboard({}: Props) {
    const t = useTranslations('Dashboard');
    return (
        <div className="flex items-center justify-center">
            <div className="flex-grow px-4 pt-4 pb-8">
                <div className="bg-white rounded-xl shadow-md p-4">
                    <p>Dashboard</p>
                </div>
            </div>
        </div>
    );
}
