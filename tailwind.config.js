/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#010101",
          "200": "rgba(255, 255, 255, 0.75)",
          "300": "rgba(255, 255, 255, 0.2)",
          "400": "rgba(255, 255, 255, 0.06)",
          "500": "rgba(255, 255, 255, 0.15)",
          "600": "rgba(255, 255, 255, 0.1)",
          "700": "rgba(255, 255, 255, 0.3)",
        },
        aqua: "#00ffe6",
        white: "#fff",
        gainsboro: "#d9d9d9",
      },
      fontFamily: {
        "terminus-ttf": "'Terminus (TTF)'",
      },
      borderRadius: {
        "6xs-3": "6.3px",
      },
    },
    fontSize: {
      "5xl": "24px",
      "base-6": "16.6px",
      smi: "13px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
