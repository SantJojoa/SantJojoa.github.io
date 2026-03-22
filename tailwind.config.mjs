/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#2F6BFF',      // azul principal
                secondary: '#22B8CF',    // cian petróleo
                dark: '#060B16',         // fondo azul noche
                surface: '#0E1628',      // superficie de cards
                muted: '#8FA1C2',        // texto secundario
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}