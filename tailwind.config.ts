import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                text: {
                    primary: '#DEDFE1',
                    secondary: '#7f8694',
                    disabled: '#b4b4b4',
                },
                main: '#DB5447',
                background: '#010A1A',
                secondary: '#121824',
                point: '#353D4A',
            },
            width: {
                inherit: 'inherit',
            },
            animation: {
                'bounce-delay-1': 'bounce 1s infinite 150ms',
                'bounce-delay-2': 'bounce 1s infinite 300ms',
            },
        },
    },
    plugins: [require('tailwind-scrollbar-hide')],
};
export default config;
