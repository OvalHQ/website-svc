module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Euclid Circular A', '-apple-system', 'BlinkMacSystemFont'],
      serif: ['Euclid Circular A', 'Georgia', 'Cambria', 'serif'],
      mono: ['Euclid Circular A', 'SFMono-Regular', 'Menlo', 'mono'],
      body: ['Euclid Circular A', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#00BCB0',
        secondary: '#5630FF',
        darkGray: '#333333',

        blue: {
          cool: '#e6ebff',
          cool2: '#e0e7ff',
          navy: '#061938',
          ink: '#242582',
          ocean: '#F8FAFB',
          offBlue: '#8798AD',
          bodyLighter: '#778CA2',
        },
        grey: {
          offWhite: '#F2F2F2',
          lightGray: '#B4BAC3',
          graySuit: '#6A7588',
          dark: '#333333',
          title: '#2B3A4B',
          another: '#F4F6F9',
        },
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.5rem',
        '2xl': '2.5rem',
        '4xl': '4rem',
      },
      boxShadow: {
        primaryBtnShadow: '0 5px #00a69b',
        card: '0px 4px 200px #F4F6F9',
      },
      backgroundImage: {
        chevronDown: `url(../svg/chevron-down.svg)`,
        blob: `url(../svg/home/blob.svg)`,
      },
      backgroundPosition: {
        'right-95': '95%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};