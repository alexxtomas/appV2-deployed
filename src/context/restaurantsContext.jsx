import { createContext, useEffect, useState } from 'react'
import api from '../services/api'

export const RestaurantsContext = createContext()

export default function RestaurantsProvider({ children }) {
  const [restaurants, setRestaurants] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)
    api
      .getAllRestaurants()
      .then((res) => {
        setRestaurants(res)
        setLoading(false)
      })
      .catch(() => setError(true))
  }, [])

  const getById = async (id) => {
    setLoading(true)
    return api
      .getRestaurantById(id)
      .then((res) => {
        setLoading(false)
        return res
      })
      .catch(() => setError(true))
  }

  const createOne = async (restaurant) => {
    setLoading(true)
    return api
      .createRestaurant(restaurant)
      .then((newRestaurant) => {
        setRestaurants((curr) => [...curr, newRestaurant])
        setLoading(false)
        return newRestaurant
      })
      .catch((e) => setError(true))
  }

  const updateById = async (id, restaurant) => {
    setLoading(true)
    return api
      .updateRestaurantById(id, restaurant)
      .then((newRestaurant) => {
        setRestaurants((curr) => curr.map((c) => (c.id === id ? newRestaurant : c)))
        setLoading(false)
        return newRestaurant
      })
      .catch((e) => setError(true))
  }

  const deleteById = async (id) => {
    return api
      .deleteById(id)
      .then((deleted) => {
        setRestaurants((curr) => curr.filter((r) => r.name !== deleted?.name))
      })
      .catch(() => setError(true))
  }

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        loading,
        error,
        deleteById,
        getById,
        createOne,
        updateById
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  )
}
