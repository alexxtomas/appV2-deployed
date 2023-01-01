import styled from 'styled-components'

export const Container = styled.div`
  border-radius: 4px;
  cursor: pointer;
`

export const Content = styled.button.attrs({
  type: 'button'
})`
  appearance: none;
  cursor: pointer;
  align-items: baseline;
  text-overflow: ellipsis;
  white-space: pre;
  text-align: center;
  overflow: hidden;
  width: 150px;
  border-radius: 12px;
  padding: 6px 12px;
  font-size: ${({ theme }) => theme.fontSize.xs};
  background-color: #ff9671;

  /* background: ${({ theme }) => theme.colors.button.background}; */
  font-weight: bold;
  margin-bottom: 1rem;
`
