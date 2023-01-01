import styled from 'styled-components'
export const NotFoundContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.main.background};
  min-width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const NotFoundText = styled.h1`
  color: ${({ theme }) => theme.colors.main.text};
`
