import type { Config } from 'tailwindcss';

export default {
    content: ['./pages/**/*.{html,js}', './components/**/*.{html,js}'],
    theme: {
        backgroundColor: {
            grey: '#F0F0F0',
            white: '#FFFFFF',
            blue: '#00ADEF',
            black: '#000000',
        },
        fontFamily: {
            sans: ['Montserrat', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
        },
        fontWeight: {
            normal: '400',
            medium: '500',
            semibold: '600',
            extrabold: '800',
        },
        fontSize: {
            ssm: '0.625rem',
            sm: '0.8rem',
            base: '1rem',
            xl: '1.25rem',
            '2xl': '1.563rem',
            '3xl': '1.953rem',
            '4xl': '2.441rem',
            '5xl': '3.052rem',
        },
        colors: {
            grey: '#717171',
            blue: '#00ADEF',
            black: '#000000',
            white: '#FFFFFF',
            red: '#ff0000',
            'gray-light': '#EBEBEB',
        },
        container: {
            center: true,
            screens: {
                sm: '320px', // Начиная с sm будет ограничение по ширине
                md: '768px',
                lg: '1024px',
                xl: '1280px',
                '2xl': '1536px',
            },
        },
        borderRadius: {
            large: '50px',
            medium: '20px',
            small: '10px',
        },
        extend: {
            fontSize: {
                base: '16px', // или любой другой размер по умолчанию
            },
            borderColor: {
                grey: '#F0F0F0',
                blue: '#00ADEF',
            },
        },
    },
    plugins: [],
} satisfies Config;
