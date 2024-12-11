import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.tsx",
  ],
  theme: {
    extend: {

      gridTemplateColumns: {
        app: 'minmax(18rem, 20rem) 1fr',
        profile: 'max-content 1fr max-content'
      },

      colors: {
        sergio: '#8257e6'
      },

    },
  },
  plugins: [],
} satisfies Config;
