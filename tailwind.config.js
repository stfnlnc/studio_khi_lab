import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'dark': '#191919',
                'violet': '#DAD6EA',
                'blue': '#CDDFE6',
                'green': '#D3E0D3',
                'grey': '#F1F1F1',
                'beige': '#EAE0D6',
            },
            transitionDuration: {
                '1800': '1800ms',
            }
        },
    },
    plugins: [forms],
    darkMode: 'media',
}


