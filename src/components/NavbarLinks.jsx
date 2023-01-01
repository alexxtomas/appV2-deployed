import { NavbarLink, NavbarLinkExtended } from '../styles/components/Navbar.styled'

export default function NavbarLinks({ paths, extended }) {
  return (
    <>
      {paths.map(({ display, path }, i) => {
        if (extended) {
          return (
            <NavbarLinkExtended key={i} href={path}>
              {display}
            </NavbarLinkExtended>
          )
        }

        return (
          <NavbarLink key={i} href={path}>
            {display}
          </NavbarLink>
        )
      })}
    </>
  )
}
