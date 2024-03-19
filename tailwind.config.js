/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./node_modules/flowbite-react/**/*.js",
    "./SVG/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pageBlack: "#3D3D3D",
        pageMenu: "#383434",
        page5: "#AC9F7C",
        page4: "#B88566",
        page3: "#E48368",
        page2: "#FAC3A5",
        page1: "#FBEDE0",
        pageButton: "#BD927B",
        pageWhite: "#FAF8F6",
      },
      fontFamily: {
        body: ['Nunito', "sans-serif"],
        page: ['Montserrat', "sans-serif"]
      },
      animation: {
        'swing-slow': 'swing 10s infinite',
        'growUp': 'growUp 0.5s ease-out',
        'scale-swing-rotate': 'scaleSwingRotate 4s infinite',
        'blink-500': 'blink-500 1000ms infinite',
        'blink-750': 'blink-750 1500ms infinite',
        'blink-1000': 'blink-900 2000ms infinite',
        'blink-1250': 'blink-1000 2500ms infinite',
      },
      keyframes: {
        swing: {
          '0%, 100%': {
            transform: 'translateX(-2%) rotate(-3deg)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateX(2%) rotate(3deg)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
        growUp: {
          'from': {
            transform: 'scaleY(0)',
            transformOrigin: 'bottom',
            opacity: 0,
          },
          'to': {
            transform: 'scaleY(1)',
            transformOrigin: 'bottom',
            opacity: 1,
          },
        },
        scaleSwingRotate: {
          '0%, 100%': {
            transform: 'scale(1) translateX(0) rotate(0deg)',
          },
          '25%': {
            transform: 'scale(1.1) translateX(-5%) rotate(-3deg)',
          },
          '50%': {
            transform: 'scale(0.9) translateX(5%) rotate(3deg)',
          },
          '75%': {
            transform: 'scale(1.1) translateX(-5%) rotate(-3deg)',
          },
        },
        'blink-500': {
          '0%, 100%': { opacity: 1 },
          '49.999%': { opacity: 1 },
          '50%': { opacity: 0 },
          '99.999%': { opacity: 0 },
        },
        'blink-750': {
          '0%, 100%': { opacity: 1 },
          '49.999%': { opacity: 1 },
          '50%': { opacity: 0 },
          '99.999%': { opacity: 0 },
        },
        'blink-900': {
          '0%, 100%': { opacity: 1 },
          '49.999%': { opacity: 1 },
          '50%': { opacity: 0 },
          '99.999%': { opacity: 0 },
        },
        'blink-1000': {
          '0%, 100%': { opacity: 1 },
          '49.999%': { opacity: 1 },
          '50%': { opacity: 0 },
          '99.999%': { opacity: 0 },
        },
      },
      gridTemplateColumns: {
        '12': 'repeat(12, minmax(0, 1fr))',
        '13': 'repeat(13, minmax(0, 1fr))',
        '14': 'repeat(14, minmax(0, 1fr))',
        '15': 'repeat(15, minmax(0, 1fr))',
        '16': 'repeat(16, minmax(0, 1fr))',
        '17': 'repeat(17, minmax(0, 1fr))',
        '18': 'repeat(18, minmax(0, 1fr))',
        '19': 'repeat(19, minmax(0, 1fr))',
        '20': 'repeat(20, minmax(0, 1fr))',
      },
      gridTemplateRows: {
        '7': 'repeat(7, minmax(0, 1fr))',
        '8': 'repeat(8, minmax(0, 1fr))',
        '9': 'repeat(9, minmax(0, 1fr))',
        '10': 'repeat(10, minmax(0, 1fr))',
        '12': 'repeat(11, minmax(0, 1fr))',
        '12': 'repeat(12, minmax(0, 1fr))',
        '13': 'repeat(13, minmax(0, 1fr))',
        '14': 'repeat(14, minmax(0, 1fr))',
        '15': 'repeat(15, minmax(0, 1fr))',
        '16': 'repeat(16, minmax(0, 1fr))',
        '17': 'repeat(17, minmax(0, 1fr))',
        '18': 'repeat(18, minmax(0, 1fr))',
        '19': 'repeat(19, minmax(0, 1fr))',
        '20': 'repeat(20, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
};
