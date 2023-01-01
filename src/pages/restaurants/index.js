import Error from '../../components/Error'
import Loading from '../../components/Loading'
import RestaurantCard from '../../components/RestaurantCard'
import { useRestaurants } from '../../hooks/useRestaurants'
import {
  RestaurantPageAddNewLink,
  RestaurantPageAddNewLinkContainer,
  RestaurantPageContainer
} from '../../styles/components/RestaurantCard.styled.'
export default function Restaurants() {
  const { restaurants, loading, error } = useRestaurants()
  if (error) return <Error />
  if (loading) return <Loading />

  if (!restaurants.length) return <p>There are no restaurants, please add one.</p>
  return (
    <>
      {!restaurants.length ? (
        <p>There are no restaurants, please add one.</p>
      ) : (
        <RestaurantPageContainer>
          <RestaurantPageAddNewLinkContainer>
            <RestaurantPageAddNewLink href='/restaurants/new'>Add new </RestaurantPageAddNewLink>
          </RestaurantPageAddNewLinkContainer>
          {restaurants.map(({ id, image, cuisineType, name, reviews }) => {
            if (!reviews) reviews = []
            const ratings = reviews.map(({ rating }) => rating)
            const average = (ratings.reduce((acc, curr) => acc + curr, 0) / ratings.length).toFixed(
              1
            )
            return (
              <RestaurantCard
                average={average}
                id={id}
                image={image}
                cuisineType={cuisineType}
                name={name}
                ratingsLength={ratings.length}
                key={id}
              />
            )
          })}
        </RestaurantPageContainer>
      )}
    </>
  )
}
