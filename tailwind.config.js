/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],

  darkMode: 'selector',

  theme: {
    colors:{
      retro:{
        'white': '#f4f1de',
        'red': '#e07a5f',
        'blue': '#3d405b',
        'green': '#81b29a',
        'yellow': '#f2cc8f'

      },
      grey:{
        darkest:'#212529',
        dark:'#343a40',
        default: '#495057',
        light:  '#8F9999',
        lightest: '#adb5bd'
      }
    },
    fontFamily: {
      'sans': ['Poppins', 'ui-sans-serif'],
      'serif': ['Merriweather', 'ui-serif']
    },
    fontSize: {
      //Defaults
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      //Headings
      d1: ['52px', '54px'],  
      d2: ['42px', '44px'],
      d3: ['32px', '34px'],
      d4: ['26px', '28px'],
      d5: ['18px', '26px']
    },
    
    extend: { },
    container:{
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      }
    }

  },
  plugins: [],
}

