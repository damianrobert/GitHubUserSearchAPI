/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: "var(--primary-blue)",
        lightGray: "var(--light-gray)",
        lightBluePale: "var(--light-blue-pale)",
        tealishBlue: "var(--tealish-blue)",
        ghostWhite: "var(--ghost-white)",
        secondaryWhite: "var(--secondary-white)",
        darkBlue: "var(--dark-blue)",
        darkTealishBlue: "var(--dark-tealish-blue)",
      },
    },
  },
  plugins: [],
};
