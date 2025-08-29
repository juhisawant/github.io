/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        border: "var(--color-border)",
        primary: "var(--color-primary)",
        accent: "var(--color-accent)",
      },
      spacing: {
        header: "var(--header-height)",
        footer: "var(--footer-height)",
        navgap: "var(--nav-gap)",
      },
    },
  },
  plugins: [],
};
