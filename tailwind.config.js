/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			poppins: [
  				'Poppins',
  				'sans-serif'
  			],
  			greatVibes: [
  				'Great Vibes',
  				'cursive'
  			],
  			dancingScript: [
  				'Dancing Script',
  				'cursive'
  			]
  		},
  		colors: {
  			'raya-primary': '#5E17EB',
  			'raya-light-gray': '#F4F4F4',
  			'raya-cream': '#FFFBF7',
  			'raya-beige': '#EAE9E3',
  			'raya-dark': '#181818',
  			'raya-jungle': '#5E17EB',
  			'raya-banana': '#5E17EB',
  			'raya-papaya': '#5E17EB',
  			'raya-soft-gold': '#5E17EB',
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
  		animation: {
  			'slide-in-left': 'slideInLeft 1s ease-out',
  			slide1: 'slide1 20s infinite',
  			slide2: 'slide2 20s infinite',
  			slide3: 'slide3 20s infinite',
  			slide4: 'slide4 20s infinite',
  			slide5: 'slide5 20s infinite'
  		},
  		keyframes: {
  			slideInLeft: {
  				'0%': {
  					transform: 'translateX(-100px)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'translateX(0)',
  					opacity: '1'
  				}
  			},
  			slide1: {
  				'0%, 100%': {
  					transform: 'translate(0, 0) scale(1)',
  					zIndex: '5',
  					opacity: '1'
  				},
  				'20%': {
  					transform: 'translate(80px, -20px) scale(0.95)',
  					zIndex: '4',
  					opacity: '0.9'
  				},
  				'40%': {
  					transform: 'translate(160px, -40px) scale(0.9)',
  					zIndex: '3',
  					opacity: '0.7'
  				},
  				'60%': {
  					transform: 'translate(240px, -60px) scale(0.85)',
  					zIndex: '2',
  					opacity: '0.5'
  				},
  				'80%': {
  					transform: 'translate(160px, -40px) scale(0.9)',
  					zIndex: '1',
  					opacity: '0.3'
  				}
  			},
  			slide2: {
  				'0%, 100%': {
  					transform: 'translate(160px, -40px) scale(0.9)',
  					zIndex: '1',
  					opacity: '0.3'
  				},
  				'20%': {
  					transform: 'translate(0, 0) scale(1)',
  					zIndex: '5',
  					opacity: '1'
  				},
  				'40%': {
  					transform: 'translate(80px, -20px) scale(0.95)',
  					zIndex: '4',
  					opacity: '0.9'
  				},
  				'60%': {
  					transform: 'translate(160px, -40px) scale(0.9)',
  					zIndex: '3',
  					opacity: '0.7'
  				},
  				'80%': {
  					transform: 'translate(240px, -60px) scale(0.85)',
  					zIndex: '2',
  					opacity: '0.5'
  				}
  			},
  			slide3: {
  				'0%, 100%': {
  					transform: 'translate(240px, -60px) scale(0.85)',
  					zIndex: '2',
  					opacity: '0.5'
  				},
  				'20%': {
  					transform: 'translate(160px, -40px) scale(0.9)',
  					zIndex: '1',
  					opacity: '0.3'
  				},
  				'40%': {
  					transform: 'translate(0, 0) scale(1)',
  					zIndex: '5',
  					opacity: '1'
  				},
  				'60%': {
  					transform: 'translate(80px, -20px) scale(0.95)',
  					zIndex: '4',
  					opacity: '0.9'
  				},
  				'80%': {
  					transform: 'translate(160px, -40px) scale(0.9)',
  					zIndex: '3',
  					opacity: '0.7'
  				}
  			},
  			slide4: {
  				'0%, 100%': {
  					transform: 'translate(160px, -40px) scale(0.9)',
  					zIndex: '3',
  					opacity: '0.7'
  				},
  				'20%': {
  					transform: 'translate(240px, -60px) scale(0.85)',
  					zIndex: '2',
  					opacity: '0.5'
  				},
  				'40%': {
  					transform: 'translate(160px, -40px) scale(0.9)',
  					zIndex: '1',
  					opacity: '0.3'
  				},
  				'60%': {
  					transform: 'translate(0, 0) scale(1)',
  					zIndex: '5',
  					opacity: '1'
  				},
  				'80%': {
  					transform: 'translate(80px, -20px) scale(0.95)',
  					zIndex: '4',
  					opacity: '0.9'
  				}
  			},
  			slide5: {
  				'0%, 100%': {
  					transform: 'translate(80px, -20px) scale(0.95)',
  					zIndex: '4',
  					opacity: '0.9'
  				},
  				'20%': {
  					transform: 'translate(160px, -40px) scale(0.9)',
  					zIndex: '3',
  					opacity: '0.7'
  				},
  				'40%': {
  					transform: 'translate(240px, -60px) scale(0.85)',
  					zIndex: '2',
  					opacity: '0.5'
  				},
  				'60%': {
  					transform: 'translate(160px, -40px) scale(0.9)',
  					zIndex: '1',
  					opacity: '0.3'
  				},
  				'80%': {
  					transform: 'translate(0, 0) scale(1)',
  					zIndex: '5',
  					opacity: '1'
  				}
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [
    require('lightswind/plugin'),require("tailwindcss-animate")],
}

