import type { Config } from "tailwindcss";

export default {
    darkMode: 'class',
    content: [
    "./app/**/*.tsx",
  ],
  theme: {
  	extend: {
  		gridTemplateColumns: {
  			app: 'minmax(18rem, 20rem) 1fr',
  			profile: 'max-content 1fr max-content',
				form: 'minmax(7.5rem, 17.5rem) minmax(25rem, 1fr) minmax(0, 15rem)'
  		},

			borderWidth: {
				6: '6px'
			},

			keyframes: {
				slideDownAndFade: {
					from: { opacity: 0, transform: 'translateY(-2px)'},
					to: { opacity: 1, transform: 'translateY(0)'},
				},
				// slideUpAndFade: {
				// 	from: {opacity: 1 },
				// 	to: {opacity: 0},
				// },
			},

			animation: {
				slideDownAndFade: 'slideDownAndFade 400ms cubic-bezier(0.16,1,0.3,1)',
				// slideUpAndFade: 'slideUpAndFade 1s linear'
			},

			

  		colors: {
				violet: {
					25: '#fcfaff'
				},
				error: {
					25: '#FFFBFA',
					50: '#FEF3F2',
					100: '#FEE4E2',
					200: '#FECDCA',
					300: '#FDA29B',
					400: '#F97066',
					500: '#F04438',
					600: '#D92D20',
					700: '#B42318',
					800: '#912018',
					900: '#7A271A',
				},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],

} satisfies Config;
