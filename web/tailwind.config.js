/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "768px",
      md: "1080px",
      lg: "1441px",
    },
    spacing: {
      0: 0,
      sm: "var(--space-sm)",
      md: "var(--space-md)",
      lg: "var(--space-lg)",
      gutter: "var(--gutter)",
      "header-height": "var(--header-height)",
    },
    colors: {
      bg: "var(--color-bg)",
      primary: "var(--color-primary)",
      secondary: "var(--color-secondary)",
      hover: "var(--color-hover)",
      red: "#ff0000",
    },
    fontSize: {
      sm: ["var(--text-sm)", "1"],
      md: ["var(--text-md)", "1.2"],
      lg: ["var(--text-lg)", "1"],
    },
  },
  plugins: [],
};
