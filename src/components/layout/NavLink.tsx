'use client';

import Link from 'next/link';
import React, { ReactNode } from 'react';
import { isCurrentPath } from '@/libs/clientHelpers';

interface Props {
    href: string;
    children: ReactNode;
    className?: string;
}

function NavLink({ children, href, className }: Props) {
    return (
        <Link href={href} className={isCurrentPath(href) ? className + ' active' : className}>
            {children}
        </Link>
    );
}

export default NavLink;
