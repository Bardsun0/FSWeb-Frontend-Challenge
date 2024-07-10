module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "custom-black": "#0A0A14",
        "custom-pink": "#E92577",
        "custom-pink1": "#EA2678",
        "custom-darkpink": "#AF0C48",
        "custom-lightblue": "#82BBFF",
        "custom-gray": "#D9D9D9",
        "custom-darkblue": "#0077B5",
        "custom-blue1": "#038FD6",
        "custom-blue2": "#1769FF",
        "custom-purple": "#764ABC",
        "custom-lightgreen": "#D9F6F1",
        "custom-lightblue1": "#DDEEFE",
        "custom-yellow": "#FFE86E",
        "custom-lightgray": "#F4F4F4",
        "custom-modecolor": "#777777",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        playfair: ["Playfair Display", "sans-serif"],
      },
      textShadow: {
        custom: "2px 2px 4px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow-custom": {
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
