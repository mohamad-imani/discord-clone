/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    fontFamily: {
      "gg-sans-bold": ["gg sans bold"],
      "gg-sans-regular": ["gg sans Normal Regular"],
      "gg-sans-medium": ["gg sans Medium Regular"],
      Ginto: ["Ginto"],
    },
    screens: {
      xs: "389.9px",
      // => @media (min-width: 390px) { ... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      xxl: "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      content: {
     

        chevron: 'url("/img/chevron.svg")',
      },
      backgroundImage: {
        "bg-shape": "url('/img/bg-shape.svg')",
        "bg-journey": "url('/img/bg-journey.svg')",
      },
      scale: {
        500: "5",
      },
      colors: {
        purple: {
          1000: "#5865f2",
        },
        blue: {
          1000: "#404EED",
        },
        gray: {
          1000: "#23272A",
        },
      },
    },
  },
  plugins: [],

};
