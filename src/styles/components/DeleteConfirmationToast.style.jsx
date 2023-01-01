import styled from 'styled-components'

export const ToastContainer = styled.div`
  width: 200px;
  color: ${({ theme }) => theme.colors.main.text};
  text-align: center;
  padding: 5px;
`
export const ToastQuestion = styled.p`
  margin-bottom: 8px;
`

export const ToastButtonsContainer = styled.div`
  display: flex;
  gap: 2px;
  justify-content: space-evenly;
`

export const ToastButton1 = styled.button`
  background: #d53624;
  border: none;
  padding: 5px;
  border-radius: 4px;
  cursor: pointer;
`

export const ToastButton2 = styled.button`
  background: #dcdcdc;

  border: none;
  padding: 5px;
  border-radius: 4px;
  cursor: pointer;
`
