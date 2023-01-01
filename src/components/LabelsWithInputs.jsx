import { Fragment } from 'react'
import { Input, Label } from '../styles/components/Form.styled'

export default function LabelWithInputs({ content }) {
  if (!content.length) {
    return Object.entries(content).map((values, i) => {
      return (
        <Fragment key={i}>
          <Label htmlFor={values[0]}>{values[0]}</Label>
          <Input value={values[1]} id={values[0]} name={values[0]} type='text' required />
        </Fragment>
      )
    })
  }
  return (
    <>
      {content.map((text, i) => {
        const lowerCaseText = text.toLowerCase()
        return (
          <Fragment key={i}>
            <Label htmlFor={lowerCaseText}>{text}</Label>
            <Input id={lowerCaseText} name={lowerCaseText} type='text' required />
          </Fragment>
        )
      })}
    </>
  )
}
