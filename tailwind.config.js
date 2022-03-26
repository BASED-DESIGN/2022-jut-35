module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '768px',
      md: '960px',
      lg: '1280px',
      xl: '1440px',
      '2xl': '1680px',
    },
    container: {
      padding: {
        DEFAULT: '1.5rem',
        sm: '2rem',
        lg: '6rem',
        xl: '10rem',
        '2xl': '10%',
      },
    },
    colors: {
      'kv-1': '#EDB524',
      'kv-2': '#1ED172',
      'kv-3': '#9BD6E4',
      'anwser': '#285983',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#404040',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'white': '#FFFFFF',
      'black': '#000000',
    },
    fontFamily: {
      title: ['Malayalam MN', 'Noto Sans TC', 'sans-serif'],
      inner: ['Din', 'Din Pro', 'Noto Sans TC', 'sans-serif'],
      // serif: ['Merriweather', 'serif'],
    },
    transitionDuration: {
      '0': '0ms',
      '200': '200ms',
      '400': '400ms',
      '800': '800ms',
      '1000': '1000ms',
      '1500': '1500ms',
      '2000': '2000ms',
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      'half': '50%',
      'over-quarter': '125%',
      'over-half': '150%',
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      aspectRatio: {
        '1/1': '1 / 1',
        '2/1': '2 / 1',
        '1/2': '1 / 2',
        '3/2': '3 / 2',
        '2/3': '2 / 3',
        '4/3': '4 / 3',
        '3/4': '3 / 4',
        '16/9': '16 / 9',
        '9/16': '9 / 16',
      },
      transitionTimingFunction: {
        'expo': 'cubic-bezier(.5, 0, 0, 1)',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100'
      }
    },
  },
  plugins: [],
}
