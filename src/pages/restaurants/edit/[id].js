import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Form from '../../../components/Form'
import { useAuth } from '../../../hooks/useAuth'

export default function EditRestaurant() {
  const { isAuth } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isAuth) router.push('/auth/login')
  }, [])

  return <Form />
}
