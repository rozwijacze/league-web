import type { Config } from 'tailwindcss';
const plugin = require('tailwindcss/plugin');
import { PluginAPI } from 'tailwindcss/types/config';

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
            },
            textShadow: {
                sm: '0 1px 2px #000',
                DEFAULT: '0 2px 4px #000',
                lg: '0 8px 16px #000'
            }
        }
    },
    plugins: [
        plugin(function ({ matchUtilities, theme }: PluginAPI) {
            matchUtilities(
                {
                    'text-shadow': value => ({
                        textShadow: value
                    })
                },
                { values: theme('textShadow') }
            );
        })
    ]
};
export default config;
