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
        light: '#6c757d',
        lightest: '#adb5bd'
      }
    },
    fontFamily: {
      'sans': ['Poppins', 'ui-sans-serif'],
      'serif': ['Merriweather', 'ui-serif']
    },
    extend: {},
    
  },
  plugins: [],
}

