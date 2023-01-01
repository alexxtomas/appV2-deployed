import Link from 'next/link'
import styled from 'styled-components'

export const NavbarContainer = styled.nav(
  ({ theme: { min, breakpoints, colors }, extended }) => `
    width: 100%;
    height: ${extended ? '100vh' : '80px'};
    background-color: ${colors.main.background};
    display: flex;
    flex-direction: column;

    ${min(breakpoints.sm)} {
      height: 80px
      
    }

  `
)

export const NavbarLeftContainer = styled.div`
  flex: 70%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 32px;
`

export const NavbarRightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 50px;
`

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`

export const NavbarLinkContainer = styled.div`
  display: flex;
`

export const NavbarLink = styled(Link)(
  ({ theme: { max, breakpoints, colors } }) => `
    color: ${colors.link.normal};
    font-size: 18px;
    margin: 10px;
    transition: all 0.4s ease-in-out;
    font-weight: 400;
    border-radius: 8px;
    padding: 10px;

    ${max(breakpoints.sm)} {
      display: none
    }
    :hover {
      background-color: ${colors.link.hoverBackground};
     
    }
  `
)

export const NavbarLinkExtended = styled(Link)(
  ({ theme: { max, breakpoints, colors } }) => `
    color: ${colors.link.hover};
    font-weight: bold;
    font-size: 18px};
    width: 100%;
    text-align: center;
    padding: 14px 0;
    margin: 10px;
    border-radius: 8px;
    transition: all 0.5s ease-in-out;
    :hover {
      background: ${colors.link.hoverBackground}
    }
  `
)
export const NavbarSwitchThemeButton = styled.button`
  width: 36px;
  height: 36px;
  background-color: ${({ theme }) => theme.colors.button.background};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`

export const OpenLinksButton = styled.button(
  ({ theme: { min, breakpoints } }) => `
    width: 70px;
    height: 50px;
    background: none;
    border: none;
    font-size: 45px;
    cursor: pointer;

   ${min(breakpoints.sm)} {
      display: none;
    }
  
  `
)

export const NavbarExtendedContainer = styled.div(
  ({ theme: { min, breakpoints } }) => `
  display: flex;
  flex-direction: column;
  align-items: center;

  ${min(breakpoints.sm)}{
    display: none;
  }
  `
)
