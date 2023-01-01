import styled from 'styled-components'

export const HeaderContainer = styled.header.attrs(({ className }) => ({
  className
}))`
  max-width: 800px;
  margin: auto;
`

export const MainContainer = styled.main.attrs(({ className }) => ({
  className
}))`
  max-width: 800px;
  padding: 0 52px;
  margin: auto;
  display: flex;
  flex-direction: column;
  column-gap: 5rem;
`
