import { useState } from 'react'
// import { useAuth } from '../hooks/useAuth'
import {
  NavbarContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLeftContainer,
  NavbarLinkContainer,
  NavbarRightContainer,
  OpenLinksButton
} from '../styles/components/Navbar.styled'
import HamburgerIcon from './icons/HamburgerIcon'
import NavbarLinks from './NavbarLinks'
import SwitchMode from './SwitchMode'
export default function Navbar() {
  const [extended, setExtended] = useState(false)
  // const { isAuth } = useAuth()

  const paths = [
    {
      display: 'Home',
      path: '/'
    },
    {
      display: 'Restaurants',
      path: '/restaurants'
    },
    {
      display: 'Favorites',
      path: '/favorites'
    }
  ]

  return (
    <NavbarContainer extended={extended}>
      <NavbarInnerContainer>
        <NavbarLeftContainer>
          <NavbarLinkContainer>
            <NavbarLinks paths={paths} />
            <OpenLinksButton onClick={() => setExtended((curr) => !curr)}>
              <HamburgerIcon extended={extended} />
            </OpenLinksButton>
          </NavbarLinkContainer>
        </NavbarLeftContainer>
        <NavbarRightContainer>
          <SwitchMode />
        </NavbarRightContainer>
      </NavbarInnerContainer>
      <NavbarExtendedContainer>
        {extended && (
          <>
            <NavbarLinks paths={paths} extended />
          </>
        )}
      </NavbarExtendedContainer>
    </NavbarContainer>
  )
}
