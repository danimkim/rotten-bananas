import { defineConfig, defineGlobalStyles } from "@pandacss/dev";

const globalCss = defineGlobalStyles({
  "html, body": {
    backgroundColor: "var(--black-primary)",
    color: "var(--white-primary)",
  },

  "*": {
    boxSizing: "border-box",
  },

  "button:hover": {
    cursor: "pointer",
  },
});

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    recipes: {
      cardContainer: {
        className: "container",
        description: "The styles for the MovieCard container",
        base: {
          marginTop: "5",
          display: "grid",
          gap: "2",
        },
        variants: {
          column: {
            "3": {
              "grid-template-columns": "repeat(3, 1fr)",
            },
            "5": {
              "grid-template-columns": "repeat(5, 1fr)",
            },
          },
        },
      },
      card: {
        className: "card",
        description: "The styles for the MovieCard",
        base: {
          position: "relative",
          aspectRatio: "1/1.5",
        },
        variants: {
          type: {
            skeleton: {
              backgroundColor: "#292929",
              animation: "pulse 1s infinite linear",
            },
          },
        },
      },
    },
    extend: {
      keyframes: {
        spinner: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
  globalVars: {
    "--black-primary": "#191919",
    "--yellow-primary": "#fec52e",
    "--white-primary": "#ffffff",
    "--gray-primary": "#434343",
    "--gray-secondary": "#646464",
  },
  globalCss,
});
