import { useRouter } from 'next/router'
import { RestaurantCardEditButton } from '../styles/components/RestaurantCard.styled.'
import EditIcon from './icons/EditIcon'
export default function EditRestaurantButton({ id }) {
  const router = useRouter()
  const handleClick = (e) => {
    e.stopPropagation()
    router.push(`/restaurants/edit/${id}`)
  }
  return (
    <RestaurantCardEditButton onClick={handleClick}>
      <EditIcon />
    </RestaurantCardEditButton>
  )
}
