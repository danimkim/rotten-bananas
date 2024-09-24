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
    extend: {},
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
