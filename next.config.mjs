import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/login',
                destination: '/',
                permanent: true
            }
        ];
    },
    output: 'standalone'
};

export default withNextIntl(nextConfig);
