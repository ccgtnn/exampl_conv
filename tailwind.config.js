/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      main: {
        text: '#fff',
        bg: '#15161a',
        btn: {
          bg: '#2e335b',
          bgActive: '#bf791e',
        },
        filter: {
          bg: '#1f2027',
          bgActive: '#3b4471',
        },
        form: {
          input: {
            brd: '#4D575F',
            brdActive: '#2174B7',
            bg: '#222426',
            bgActive: '#202830',
          },
          warning: '#f52',
        },
      },
      currency: {
        bg: '#21222b',
        brd: '#2e335b',
      },
    },
  },
  plugins: [],
}
