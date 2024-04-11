'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import React, { ReactNode } from 'react';

interface Props {
    href: string;
    children: ReactNode;
    className?: string;
}

function NavLink({ children, href, className }: Props) {
    const pathname = usePathname();

    console.log(useLocale());

    return (
        <Link href={href} className={pathname === href ? className + ' active' : className}>
            {children}
        </Link>
    );
}

export default NavLink;
