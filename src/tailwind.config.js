/** @type {import('tailwindcss').Config} */

module.exports = {
    purge: {
        content: [
            './pages/**/*.{js,ts,jsx,tsx}',
            './components/**/*.{js,ts,jsx,tsx}',
        ],
        options: {
            safelist: [],
        },
    },
    theme: {
        extend: {
            fontFamily: {
                Nunito: ['Nunito', 'sans-serif'],
            },
        },
    },
    plugins: [],
    darkMode: `class`,
};
