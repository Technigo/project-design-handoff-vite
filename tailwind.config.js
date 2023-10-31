/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "beige-n": "#EBE7CD",
                "blue-n": "#3232CD",
                "white-n": "#F7F7F6",
                "green-n": "#D8F59D"
            }
        },
    },
    plugins: [],
}