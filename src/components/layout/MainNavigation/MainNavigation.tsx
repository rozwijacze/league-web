import NavLink from '@/components/common/NavLink/NavLink';
import { useTranslations } from 'next-intl';
import React from 'react';
import { CiCalendarDate } from 'react-icons/ci';
import { GiDart } from 'react-icons/gi';
import { GoHomeFill } from 'react-icons/go';
import { PiChartLineThin, PiChatsCircleLight } from 'react-icons/pi';
import { TfiCup } from 'react-icons/tfi';

type Props = {};

export default function MainNavigation({}: Props) {
    const t = useTranslations('MainNavigation');
    return (
        <nav className="flex items-center px-2 py-1 bg-gray-800 rounded-xl">
            <NavLink href="/dashboard" className="main-nav-link" title={t('dashboard')}>
                <GoHomeFill />
            </NavLink>
            <NavLink href="/leagues" className="main-nav-link" title={t('leagues')}>
                <TfiCup />
            </NavLink>
            <NavLink href="/match" className="main-nav-link" title={t('match')}>
                <GiDart />
            </NavLink>
            <NavLink href="/statistics" className="main-nav-link" title={t('statistics')}>
                <PiChartLineThin />
            </NavLink>
            <NavLink href="/chat" className="main-nav-link" title={t('chat')}>
                <PiChatsCircleLight />
            </NavLink>
            <NavLink href="/schedule" className="main-nav-link" title={t('schedule')}>
                <CiCalendarDate />
            </NavLink>
        </nav>
    );
}
