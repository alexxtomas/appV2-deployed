import { ErrorMessage, Formik } from 'formik'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import * as Yup from 'yup'
import { useAuth } from '../../hooks/useAuth'
import { EditRestaurantForm } from '../../styles/components/EditRestaurant.syled'
import { Input, Label, SubmitButton } from '../../styles/components/Form.styled'
export default function SignUp() {
  const { createUser, isAuth } = useAuth()
  const router = useRouter()
  useEffect(() => {
    isAuth && router.push('/')
  }, [])
  return (
    <>
      <Formik
        initialValues={{ username: '', email: '', password: '' }}
        validationSchema={Yup.object({
          username: Yup.string().min(4).required(),
          email: Yup.string().email().required(),
          password: Yup.string().min(6).required()
        })}
        onSubmit={async (value, actions) => {
          const { user } = await createUser(value)
          if (!user) actions.setErrors({ email: 'username or email alredy exists' })

          router.push('/auth/login')
        }}
      >
        <EditRestaurantForm>
          <Label htmlFor='username'>Username</Label>
          <Input id='username' name='username' />
          <ErrorMessage component='p' name='username' style={{ color: 'red' }} />
          <Label htmlFor='email'>Email</Label>
          <Input id='email' name='email' type='email' />
          <ErrorMessage component='p' name='email' style={{ color: 'red' }} />
          <Label htmlFor='password'>Password</Label>
          <Input id='password' name='password' type='password' />
          <ErrorMessage component='p' name='password' style={{ color: 'red' }} />

          <SubmitButton type='submit'>Sign Up</SubmitButton>
        </EditRestaurantForm>
      </Formik>
      <Link style={{ textAlign: 'center' }} href='/auth/login'>
        Login Here
      </Link>
    </>
  )
}
