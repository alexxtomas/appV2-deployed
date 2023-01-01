import { ErrorMessage, Formik } from 'formik'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import * as Yup from 'yup'
import { useAuth } from '../../hooks/useAuth'
import { EditRestaurantForm } from '../../styles/components/EditRestaurant.syled'
import { Input, Label, SubmitButton } from '../../styles/components/Form.styled'
export default function Login() {
  const { isAuth, authenticateUser } = useAuth()
  const router = useRouter()

  useEffect(() => {
    isAuth && router.push('/')
  }, [])
  return (
    <>
      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={Yup.object({
          username: Yup.string().min(4).required(),
          password: Yup.string().min(6).required()
        })}
        onSubmit={async (value, actions) => {
          const response = await authenticateUser(value)
          if (response) {
            router.push('/')
          }
          actions.setErrors({ password: 'Wrong Credentials' })
        }}
      >
        <EditRestaurantForm>
          <Label htmlFor='username'>Username</Label>
          <Input id='username' name='username' />
          <ErrorMessage component='p' name='username' style={{ color: 'red' }} />
          <label htmlFor='password'>Password</label>
          <Input id='password' name='password' type='password' />
          <ErrorMessage component='p' name='password' style={{ color: 'red' }} />

          <SubmitButton type='submit'>Login</SubmitButton>
        </EditRestaurantForm>
      </Formik>
      <Link style={{ textAlign: 'center' }} href='/auth/signUp'>
        Sign Up here
      </Link>
    </>
  )
}
