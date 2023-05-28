/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
<<<<<<< HEAD
      fontFamily:{montserrat:["var(--font-montserrat ) "]},
=======
      fontFamily:{montserrat:["var(--font-montserrat) "]},
>>>>>>> c72ef85 (Add all my files)
      gridTemplateColumns:{
        fluid:'repeat(auto-fit,minmax(15rem,1fr))'
      }
    },
  },
  plugins: [],
}
