import NavLink from '@/components/layout/NavLink';
import React from 'react';
import { CiCalendarDate } from 'react-icons/ci';
import { GiDart } from 'react-icons/gi';
import { GoHomeFill } from 'react-icons/go';
import { PiChartLineThin, PiChatsCircleLight } from 'react-icons/pi';

type Props = {};

export default function MainNavigation({}: Props) {
    return (
        <nav className="flex items-center px-2 py-1 bg-gray-800 text-white rounded-xl">
            <NavLink href="/dashboard" className="main-nav-link">
                <GoHomeFill />
            </NavLink>
            <NavLink href="/match" className="main-nav-link">
                <GiDart />
            </NavLink>
            <NavLink href="/statistics" className="main-nav-link">
                <PiChartLineThin />
            </NavLink>
            <NavLink href="/chat" className="main-nav-link">
                <PiChatsCircleLight />
            </NavLink>
            <NavLink href="/schedule" className="main-nav-link">
                <CiCalendarDate />
            </NavLink>
        </nav>
    );
}
