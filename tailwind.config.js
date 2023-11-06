/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./node_modules/flowbite-react/**/*.js",
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
        pageWhite: "#FAF8F6",
      },
      fontFamily: {
        body: ['Nunito', "sans-serif"],
        page: ['Montserrat', "sans-serif"]
      },
    },
  },
  plugins: [],
};
