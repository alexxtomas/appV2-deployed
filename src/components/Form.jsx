import { ErrorMessage, Formik } from 'formik'
import { useRouter } from 'next/router'
import * as Yup from 'yup'
import { useRestaurants } from '../hooks/useRestaurants'
import {
  EditRestaurantContainer,
  EditRestaurantForm,
  EditRestaurantLeftContainer,
  EditRestaurantRightContainer
} from '../styles/components/EditRestaurant.syled'
import {
  FileInput,
  FileInputLabel,
  Input,
  Label,
  SubmitButton
} from '../styles/components/Form.styled'

import Error from './Error'
import Loading from './Loading'

export default function Form() {
  const router = useRouter()
  const { id } = router.query
  const { restaurants, error, loading, updateById, createOne } = useRestaurants()
  let restaurant
  if (id) {
    restaurant = restaurants.filter((r) => r?.id === id)[0]
  } else {
    restaurant = {
      name: '',
      neighborhood: '',
      address: '',
      cuisineType: '',
      image: ''
    }
  }

  if (error) return <Error />
  if (loading) return <Loading />

  return (
    <EditRestaurantContainer>
      <Formik
        initialValues={
          id
            ? {
                name: restaurant?.name,
                neighborhood: restaurant?.neighborhood,
                address: restaurant?.address,
                cuisineType: restaurant?.cuisineType,
                image: restaurant?.image
              }
            : restaurant
        }
        validationSchema={Yup.object({
          name: Yup.string().min(4),
          neighborhood: Yup.string().min(4),
          address: Yup.string().min(8),
          cuisineType: Yup.string().min(4)
        })}
        onSubmit={async (values, actions) => {
          if (id) {
            const updated = await updateById(id, values)
            console.log(updated)
            console.log(values)
            router.push(`/restaurants/${id}`)
          } else {
            const saved = await createOne(values)
            router.push(`/restaurants/${saved.id}`)
          }
        }}
      >
        {({ handleSubmit, setFieldValue }) => (
          <EditRestaurantForm onSubmit={handleSubmit}>
            <EditRestaurantLeftContainer>
              <Label htmlFor='name'>Name</Label>
              <Input id='name' name='name' />
              <ErrorMessage component='p' name='name' />
              <Label htmlFor='neighborhood'>Neighborhood</Label>
              <Input id='neighborhood' name='neighborhood' />
              <ErrorMessage component='p' name='neighborhood' />
              <Label htmlFor='address'>Adress</Label>
              <Input id='address' name='address' />
              <ErrorMessage component='p' name='address' />
              <Label htmlFor='cuisineType'>Cuisine Type</Label>
              <Input id='cuisineType' name='cuisineType' />
              <ErrorMessage component='p' name='cuisineType' />
            </EditRestaurantLeftContainer>
            <EditRestaurantRightContainer>
              <FileInputLabel htmlFor='image'>Upload a picture</FileInputLabel>
              <FileInput
                type='file'
                id='image'
                name='image'
                accept='.png, .jpg, .jpeg'
                onChange={(e) => setFieldValue('image', e.target.files[0])}
              />
              <ErrorMessage component='p' name='image' />
            </EditRestaurantRightContainer>

            <SubmitButton type='submit' isUpdate={!!id}>
              {id ? 'Update' : 'Create'}
            </SubmitButton>
          </EditRestaurantForm>
        )}
      </Formik>
    </EditRestaurantContainer>
  )
}
