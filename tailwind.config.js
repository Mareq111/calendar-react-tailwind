/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'stratos': {
          '50': '#e6edff',
          '100': '#d1ddff',
          '200': '#acbeff',
          '300': '#7a91ff',
          '400': '#4653ff',
          '500': '#211cff',
          '600': '#1600ff',
          '700': '#1200ff',
          '800': '#1000dc',
          '900': '#1305aa',
          '950': '#090240',
      },
      }
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
}

