import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

export default function Theme({ children }) {
  const [theme, setTheme] = useState('dark')
  const isDarkTheme = theme === 'dark'

  const darkTheme = {
    colors: {
      main: {
        background: '#111111',
        icon: ' #E5E7EB',
        text: '#FFF',
        border: '#aaa'
      },
      button: {
        background: '#444444'
      },
      link: {
        normal: '#888',
        hover: '#EAEAEA',
        hoverBackground: '#222'
      },
      input: {
        text: '#fff',
        background: '#444'
      },
      toast: {
        background: '#111',
        border: '#333'
      },
      hamburger: '#F3F4F6',
      calendarPicker:
        'invert(88%) sepia(35%) saturate(0%) hue-rotate(146deg) brightness(111%) contrast(73%)'
    },
    breakpoints: {
      sm: '768px'
    },
    min: (breakpoint) => `@media (min-width: ${breakpoint})`,
    max: (breakpoint) => `@media (max-width: ${breakpoint})`,
    toggleTheme: () => setTheme(isDarkTheme ? 'light' : 'dark'),
    isDarkTheme
  }

  const lightTheme = {
    colors: {
      main: {
        background: '#F9FAFB',
        icon: '#222',
        text: '#000',
        border: '#dadada'
      },
      button: {
        background: ' #E5E7EB'
      },
      link: {
        normal: '#444',
        hover: '#222',
        hoverBackground: '#ddd'
      },
      input: {
        text: '#000',
        background: '#dfdfdf'
      },
      toast: {
        background: '##F9FAFB',
        border: '#ccc'
      },
      hamburger: '#111827',
      calendarPicker:
        'invert(16%) sepia(0%) saturate(0%) hue-rotate(181deg) brightness(91%) contrast(85%)'
    },

    breakpoints: {
      sm: '770px'
    },
    min: (breakpoint) => `@media (min-width: ${breakpoint})`,
    max: (breakpoint) => `@media (max-width: ${breakpoint})`,
    toggleTheme: () => setTheme(isDarkTheme ? 'light' : 'dark'),
    isDarkTheme
  }

  return <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>{children}</ThemeProvider>
}
