/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: ['class', '[data-mode="dark"]'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
    fontFamily: {
      'kalam': ['Kalam', "cursive"],
      'berkshire': ['Berkshire Swash', "cursive"],
  }}},
  plugins:  [
    require('flowbite/plugin')
  ],
  safelist: ['animate-[fade-in_1s_ease-in-out]', 'animate-[fade-in-down_1s_ease-in-out] , animate-[fade-in-up_1s_ease-in-out]']

}
