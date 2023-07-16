import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens:{
        "xl2": "1400px",
        "xl3": "1700px",
        "xl4": "2000px"
      }
    },
  },
  plugins: [require("daisyui")],

  daisyui:{
    themes: ["dracula","winter"]
  }
} satisfies Config;
