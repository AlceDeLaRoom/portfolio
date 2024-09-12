/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: ({
                theme
            }) => ({
                'image-gradient-170deg': 'linear-gradient(170deg, var(--tw-gradient-stops))',
            }),},
    },
    plugins: [],
}

