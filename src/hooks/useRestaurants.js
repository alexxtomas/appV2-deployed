import { useContext } from 'react'

import { RestaurantsContext } from '../context/restaurantsContext'

export function useRestaurants() {
  const restaurantsContext = useContext(RestaurantsContext)

  return restaurantsContext
}
