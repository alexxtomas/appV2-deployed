import { useTheme } from 'styled-components'

export default function HamburgerIcon({ extended }) {
  const theme = useTheme()
  if (!extended) {
    return (
      <>
        <svg
          color={theme.colors.hamburger}
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          width='24'
          height='24'
          style={{ marginBottom: '5px' }}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
          />
        </svg>
      </>
    )
  }

  return (
    <>
      <svg
        color={theme.colors.hamburger}
        viewBox='0 0 24 24'
        width='20px'
        height='20px'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
        fill='none'
        shapeRendering='geometricPrecision'
      >
        <path d='M18 6L6 18' />
        <path d='M6 6l12 12' />
      </svg>
    </>
  )
}
