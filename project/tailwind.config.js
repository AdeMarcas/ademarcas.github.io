module.exports = {
    content: ['./src/**/*.{vue,js,ts}', './src/components/**/*.{vue,js,ts}'],
    plugins: [require('@tailwindcss/typography'), require('daisyui')],
    daisyui: {
        themes: ['light', 'dark', 'night'],
    },
};
