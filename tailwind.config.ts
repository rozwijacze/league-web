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
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px'
            }
        },
        extend: {
            colors: {
                'icon-active': '#ad5389',
                'primary-white': '#fff',
                'primary-purple': '#9f2042',
                'primary-red': '#7b0d1e',
                'secondary-brown': '#3d1308',
                'secondary-black': '#211103',
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                }
            },
            textShadow: {
                sm: '0 1px 2px #000',
                DEFAULT: '0 2px 4px #000',
                lg: '0 8px 16px #000'
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            keyframes: {
                'league-info-slide-down': {
                    from: {
                        height: '0',
                        padding: '0 1rem'
                    },
                    to: {
                        height: 'var(--radix-collapsible-content-height)',
                        padding: '1rem'
                    }
                },
                'league-info-slide-up': {
                    from: {
                        height: 'var(--radix-collapsible-content-height)',
                        padding: '1rem'
                    },
                    to: {
                        height: '0',
                        padding: '0 1rem'
                    }
                },
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' }
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' }
                }
            },
            animation: {
                'league-info-slide-down': 'league-info-slide-down 0.3s ease-out',
                'league-info-slide-up': 'league-info-slide-up 0.3s ease-out',
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out'
            }
        }
    },
    plugins: [
        require('tailwindcss-animate'),
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
} satisfies Config;

export default config;
