import { createLocalizedPathnamesNavigation, Pathnames } from 'next-intl/navigation';

export const locales = ['pl', 'en'] as const;
export const localePrefix = 'as-needed';
export const pathnames = {
    '/dashboard': {
        pl: '/panel',
        en: '/dashboard'
    },
    '/login': {
        pl: '/',
        en: '/'
    },
    '/register': {
        pl: '/rejestracja',
        en: '/register'
    },
    '/leagues': {
        pl: '/ligi',
        en: '/leagues'
    },
    '/match': {
        pl: '/mecz',
        en: '/match'
    },
    '/statistics': {
        pl: '/statystyki',
        en: '/statistics'
    },
    '/chat': {
        pl: '/czat',
        en: '/chat'
    },
    '/schedule': {
        pl: '/harmonogram',
        en: '/schedule'
    },
    '/match/[lobby-id]': {
        pl: '/mecz/[lobby-id]',
        en: '/match/[lobby-id]'
    }
} satisfies Pathnames<typeof locales>;

export type PathKey = keyof typeof pathnames;
export type LocalePath = keyof (typeof pathnames)[PathKey];

export const { Link, redirect, usePathname, useRouter, getPathname } =
    createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames });
