/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "my-background": "url('./src/assets/bg-clouds.jpg')",
        "inside-bg": "url('./src/assets/inside-bg.jpg')",
      },
      boxShadow: {
        'custom': 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
      },
    },
  },
  plugins: [],
};
