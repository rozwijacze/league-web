'use client';

import { IsCurrentPath } from '@/libs/ClientHelpers';
import Link from 'next/link';
import React, { ReactNode } from 'react';

interface Props {
    href: string;
    children: ReactNode;
    className?: string;
}

function NavLink({ children, href, className }: Props) {
    return (
        <Link href={href} className={IsCurrentPath(href) ? className + ' active' : className}>
            {children}
        </Link>
    );
}

export default NavLink;
