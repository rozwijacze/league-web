import createMiddleware from 'next-intl/middleware';
import { locales, localePrefix, pathnames } from './navigation';

export default createMiddleware({
    defaultLocale: 'pl',
    locales,
    localePrefix,
    pathnames
});

export const config = {
    // Match only internationalized pathnames
    matcher: [
        // Enable a redirect to a matching locale at the root
        '/',
        '/(pl|en)/:path*',
        // Enable redirects that add missing locales
        // (e.g. `/pathnames` -> `/en/pathnames`)
        '/((?!_next|_vercel|.*\\..*).*)'
    ]
};
