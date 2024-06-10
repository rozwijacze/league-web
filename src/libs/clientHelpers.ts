'use client';

import { LocalePath, PathKey, pathnames } from '@/navigation';
import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';

/**
 * Checks if provided path is the same as current
 * This method helps with checking main locale paths (pl), which is not included in the url
 * @param path
 * @returns {boolean}
 */
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

/**
 * Search helper function which checks if provided key is in value
 * @param value
 * @param key
 * @returns {boolean}
 */
export function valueFoundInKey(value: string, key: string) {
    return key.toLowerCase().includes(value.toLowerCase());
}
