'use client';

import { IsCurrentPath } from '@/libs/clientHelpers';
import Link from 'next/link';
import React, { ReactNode } from 'react';

type Props = {
    href: string;
    children: ReactNode;
    className?: string;
    title?: string;
};

function NavLink({ children, href, className, title }: Props) {
    return (
        <Link
            href={href}
            className={IsCurrentPath(href) ? className + ' active' : className}
            title={title}
        >
            {children}
        </Link>
    );
}

export default NavLink;
