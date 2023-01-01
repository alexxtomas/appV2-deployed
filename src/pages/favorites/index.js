import { useEffect, useState } from 'react'
import RestaurantCard from '../../components/RestaurantCard'

import { useRouter } from 'next/router'
import { useAuth } from '../../hooks/useAuth'
import { useRestaurants } from '../../hooks/useRestaurants'
import { RestaurantPageContainer } from '../../styles/components/RestaurantCard.styled.'
export default function Favorites() {
  const [favorites, setFavorites] = useState([])
  const { restaurants } = useRestaurants()

  const { isAuth } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isAuth) router.push('/auth/login')
    if (!restaurants.length) window.localStorage.removeItem('favorites')
    if (typeof window !== 'undefined' && !window.localStorage.getItem('favorites')) {
      window.localStorage.setItem('favorites', JSON.stringify([]))
    } else {
      setFavorites(JSON.parse(window.localStorage.getItem('favorites')))
    }
  }, [])

  return (
    <>
      {!favorites.length ? (
        <p>No favorites yet</p>
      ) : (
        <RestaurantPageContainer>
          {favorites.map(({ reviews, id, image, cuisineType, name }) => {
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
