import { useEffect, useState } from 'react'
import { useRestaurants } from '../hooks/useRestaurants'

export default function AddToFavorites({ id }) {
  const [isFavorite, setIsFavorite] = useState(() => {
    const favorites = JSON.parse(window.localStorage.getItem('favorites'))
    if (!favorites) return false
    return favorites.find((f) => f.id === id) !== undefined
  })
  const { restaurants } = useRestaurants()

  useEffect(() => {
    if (typeof window !== 'undefined' && !window.localStorage.getItem('favorites')) {
      window.localStorage.setItem('favorites', JSON.stringify([]))
    }
  }, [])
  const handleClick = (e) => {
    if (typeof window !== 'undefined') {
      const favorites = JSON.parse(window.localStorage.getItem('favorites'))

      if (isFavorite) {
        const updatedFavorites = favorites.filter((f) => f.id !== id)
        window.localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
        setIsFavorite(false)
      } else {
        const selected = restaurants.find((r) => r.id === id)
        favorites.push(selected)
        window.localStorage.setItem('favorites', JSON.stringify(favorites))
        setIsFavorite(true)
      }
    }
  }
  return (
    <div style={{ margin: '2rem auto 0' }}>
      <svg
        onClick={handleClick}
        xmlns='http://www.w3.org/2000/svg'
        fill={isFavorite ? 'red' : 'none'}
        viewBox='0 0 24 24'
        strokeWidth='1.5'
        stroke='currentColor'
        className=''
        style={{ width: '60px', height: '60px', cursor: 'pointer' }}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
        />
      </svg>
    </div>
  )
}
