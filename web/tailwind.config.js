/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "768px",
      md: "1080px",
      // lg: "1441px",
      lg: "1500px",
    },
    spacing: {
      0: 0,
      "1e": "1em",
      "1re": "1rem",
      xs: "var(--space-xs)",
      sm: "var(--space-sm)",
      md: "var(--space-md)",
      lg: "var(--space-lg)",
      40: "var(--space-40)",
      50: "var(--space-50)",
      100: "var(--space-100)",
      200: "var(--space-200)",
      gutter: "var(--gutter)",
      "header-height": "var(--header-height)",
    },
    colors: {
      bg: "var(--color-bg)",
      primary: "var(--color-primary)",
      secondary: "var(--color-secondary)",
      hover: "var(--color-hover)",
      red: "#ff0000",
      black: "#000",
      white: "#fff",
    },
    fontSize: {
      xs: ["var(--text-xs)", "1"],
      sm: ["var(--text-sm)", "1.4"],
      md: ["var(--text-md)", "1.2"],
      lg: ["var(--text-lg)", "1"],
    },
  },
  plugins: [],
}
