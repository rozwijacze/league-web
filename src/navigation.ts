import { createLocalizedPathnamesNavigation, Pathnames } from 'next-intl/navigation';

export const locales = ['pl', 'en'] as const;
export const localePrefix = 'as-needed';
export const pathnames = {
    '/dashboard': {
        pl: '/panel',
        en: '/dashboard'
    }
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter, getPathname } =
    createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames });
