import { useTheme } from 'styled-components'
import { NavbarSwitchThemeButton } from '../styles/components/Navbar.styled'
import MoonIcon from './icons/MoonIcon'
import SunIcon from './icons/SunIcon'
export default function SwitchMode() {
  const { toggleTheme, isDarkTheme } = useTheme()
  return (
    <NavbarSwitchThemeButton onClick={toggleTheme}>
      {isDarkTheme ? <SunIcon /> : <MoonIcon />}{' '}
    </NavbarSwitchThemeButton>
  )
}
