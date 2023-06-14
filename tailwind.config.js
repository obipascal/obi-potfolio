/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "light": "#EDEDED",
        'light-50': '#f5f5f5',
        'danger': 'rgb(220 38 38)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        'xs': '300px',
        'xs-75': '375px',
        'sm-4': '400px',
        'xl-2k':'2560px',
        'xl-1k':'1440px',
     }
    },
  },
  plugins: [],
}
