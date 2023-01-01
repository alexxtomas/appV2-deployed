import { Fragment } from 'react'
import { Fieldset, Input, Label } from '../styles/components/Form.styled'
export default function OperatingHours() {
  const days = [
    { label: 'Monday', inputNames: ['mondayStart', 'mondayEnd'] },
    { label: 'Tuesday', inputNames: ['tuesdayStart', 'tuesdayEnd'] },
    { label: 'Wednesday', inputNames: ['wednesdayStart', 'wednesdayEnd'] },
    { label: 'Thursday', inputNames: ['thursdayStart', 'thursdayEnd'] },
    { label: 'Friday', inputNames: ['fridayStart', 'fridayEnd'] },
    { label: 'Saturday', inputNames: ['saturdayStart', 'saturdayEnd'] },
    { label: 'Sunday', inputNames: ['sundayStart', 'sundayEnd'] }
  ]
  return (
    <Fieldset style={{ border: 'none', marginTop: '30px' }}>
      <legend style={{ textAlign: 'center' }}>Operating Hours</legend>
      {days.map(({ label, inputNames }, i) => {
        return (
          <Fragment key={i}>
            <Label variant='xs' id={inputNames[0]}>
              {label}
            </Label>
            <div>
              <Input id={inputNames[0]} name={inputNames[0]} type='time' /> -{' '}
              <Input name={inputNames[1]} type='time' />
            </div>
          </Fragment>
        )
      })}
    </Fieldset>
  )
}
