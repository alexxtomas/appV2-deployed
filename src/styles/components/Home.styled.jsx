const { default: styled } = require('styled-components')

export const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`

export const HomeTitle = styled.h1`
  font-size: 41px;
`

export const HomeList = styled.ul`
  list-style: none;
  font-size: 22px;
`

export const HomeListElement = styled.li`
  padding: 10px 0;
`
