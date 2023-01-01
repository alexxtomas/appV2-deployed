import { useRouter } from 'next/router'
import {
  RestaurantCardButtonContainer,
  RestaurantCardContainer,
  RestaurantCardCuisineType,
  RestaurantCardImage,
  RestaurantCardName,
  RestaurantCardRating
} from '../styles/components/RestaurantCard.styled.'
import DeleteRestaurantButton from './DeleteRestaurantButton'
import EditRestaurantButton from './EditRestaurantButton'
export default function RestaurantCard({ image, name, cuisineType, ratingsLength, average, id }) {
  const router = useRouter()
  if (isNaN(average)) average = 0
  return (
    <RestaurantCardContainer onClick={() => router.push(`/restaurants/${id}`)}>
      <RestaurantCardImage src={image} alt={`${name} restaurant photo`} />
      <RestaurantCardName>{name}</RestaurantCardName>
      <RestaurantCardRating>
        {average} ⭐ ({ratingsLength})
      </RestaurantCardRating>
      <RestaurantCardCuisineType>{cuisineType}</RestaurantCardCuisineType>
      <RestaurantCardButtonContainer>
        <EditRestaurantButton id={id} />
        <DeleteRestaurantButton id={id} />
      </RestaurantCardButtonContainer>
    </RestaurantCardContainer>
  )
}
