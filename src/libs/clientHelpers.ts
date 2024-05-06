'use client';

import { LocalePath, PathKey, pathnames } from '@/navigation';
import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';

export function IsCurrentPath(path: string) {
    const currentPath = usePathname();
    const currentLocale = useLocale();

    // Get object with locale pathnames using provided path
    const localePaths = pathnames[path as PathKey];

    if (localePaths) {
        let localePath = localePaths[currentLocale as LocalePath];

        // Add the prefix if locale is different than main one, which is not included in the url
        if (currentLocale !== 'pl') {
            localePath = `/${currentLocale}` + localePath;
        }

        // Remove last '/' character, if localePath is not a root '/'
        if (localePath.length > 1 && localePath.charAt(localePath.length - 1) === '/') {
            localePath = localePath.substring(0, localePath.length - 1);
        }

        return currentPath === localePath;
    }

    return false;
}
