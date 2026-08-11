/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(40 20% 97%)',
        foreground: 'hsl(215 25% 18%)',
        card: 'hsl(0 0% 100%)',
        'card-foreground': 'hsl(215 25% 18%)',
        popover: 'hsl(0 0% 100%)',
        'popover-foreground': 'hsl(215 25% 18%)',
        primary: {
          DEFAULT: 'hsl(218 45% 28%)',
          foreground: 'hsl(0 0% 100%)',
        },
        secondary: {
          DEFAULT: 'hsl(215 20% 94%)',
          foreground: 'hsl(215 25% 18%)',
        },
        muted: {
          DEFAULT: 'hsl(215 20% 94%)',
          foreground: 'hsl(215 10% 45%)',
        },
        accent: {
          DEFAULT: 'hsl(215 20% 94%)',
          foreground: 'hsl(215 25% 18%)',
        },
        destructive: {
          DEFAULT: 'hsl(0 84% 60%)',
          foreground: 'hsl(0 0% 98%)',
        },
        border: 'hsl(215 12% 84%)',
        input: 'hsl(215 12% 84%)',
        ring: 'hsl(218 45% 28%)',
      },
      borderRadius: {
        lg: '0.5rem',
        md: 'calc(0.5rem - 2px)',
        sm: 'calc(0.5rem - 4px)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
