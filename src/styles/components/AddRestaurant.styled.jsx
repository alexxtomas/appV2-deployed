import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 850px;
`

export const Label = styled.label`
  display: block;
  padding: 10px;
  ${(props) => props?.variant === 'xs' && `font-size: ${props.theme.fontSize.xs}`}
`

export const Input = styled.input`
  border-radius: 6px;
  width: ${(props) => (props?.type === 'time' ? ' 110px' : '250px')};
  padding: 2px 8px;
  border: none;
  background-color: ${({ theme }) => theme.colors.input.background};
  color: ${({ theme }) => theme.colors.input.text};
`
export const Fieldset = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  padding: 10px;
`

export const SubmitButton = styled.button`
  padding: 8px 16px;
  background-color: #ff6f91;
  border-radius: 12px;
  margin: auto;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  margin-top: 60px;
  cursor: pointer;
  margin-bottom: 20px;
  border: none;
`
