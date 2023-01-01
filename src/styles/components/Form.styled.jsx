import { Field } from 'formik'
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
  ${(props) => props?.variant === 'xs' && 'font-size: 14}'}
`

export const Input = styled(Field)`
  border-radius: 6px;
  width: ${(props) => (props?.type === 'time' ? ' 110px' : '250px')};
  padding: 4px 8px;
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

export const FileInputLabel = styled.label`
  margin: 0 auto;
  display: block;
  text-align: center;
  margin-top: 20px;
`

export const FileInput = styled.input`
  border-radius: 5px;
  padding: 12px;
`

export const SubmitButton = styled.button.attrs(() => ({
  type: 'submit'
}))`
  background-color: ${({ isUpdate }) => (isUpdate ? '#00C9A7' : '#009efa')};
  border-radius: 8px;
  width: 100%;
  text-align: center;
  font-weight: bold;

  cursor: pointer;
  border: none;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  border: none;
  width: 100%;
  margin-top: 15px;
  transition: all 0.5s ease;
  :hover {
    scale: 1.05;
    filter: brightness(1.2);
  }
`
