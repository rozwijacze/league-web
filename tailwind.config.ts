import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            colors: {
                'primary-purple': '#9f2042',
                'primary-red': '#7b0d1e',
                'secondary-brown': '#3d1308',
                'secondary-black': '#211103'
            }
        }
    },
    plugins: []
};
export default config;
