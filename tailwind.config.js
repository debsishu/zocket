/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#F6F9FF",
          brighter: "#E7F0FF",
          brightest: "#FFFFFF",
          gray: "#F8F8F8",
          darker: "#E4EAF2",
          dark: "#001738",
        },
        accent: {
          DEFAULT: "#0F6EFF",
          secondary: "#F29A2E",
        },
        borders: {
          DEFAULT: "#DAE6FF",
          gray: "#E9E9E9",
          grayBright: "#EAEAEA",
        },
        text: {
          darker: "#1B3F67",
        },
      },
    },
  },
  plugins: [],
};
