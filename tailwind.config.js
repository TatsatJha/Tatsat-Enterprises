module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeUp: {
          "0%": {transform:"translateY(-1.5rem)", opacity:"0%"},
          "100%": {opacity:"100%"}
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        fadeUp: 'fadeUp .75s 1 ease-in-out',
        wiggle: 'wiggle 1s ease-in-out infinite',
      }
    }
  },
  plugins: [],
}