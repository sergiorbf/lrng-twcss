import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        sergio: '#8257e6'
      },
    },
  },
  plugins: [],
} satisfies Config;
