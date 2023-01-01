import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import AddToFavorites from '../../components/AddToFavorites'
import Error from '../../components/Error'
import Loading from '../../components/Loading'
import { useAuth } from '../../hooks/useAuth'
import api from '../../services/api'

export default function Restaurant() {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const [restaurant, setRestaurant] = useState({})
  const router = useRouter()
  const { id } = router.query
  const { isAuth } = useAuth()

  useEffect(() => {
    if (!isAuth) router.push('/auth/login')
  }, [])

  useEffect(() => {
    if (id) {
      api
        .getRestaurantById(id)
        .then((res) => {
          setRestaurant(res)
          setLoading(false)
        })
        .catch(() => setError(true))
    }
  }, [id])

  if (error) return <Error />
  if (loading) return <Loading />

  return (
    <>
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          alignItems: 'center'
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>
          {restaurant.name} - {restaurant.cuisineType}
        </h2>
        <Image
          src={restaurant.image}
          alt={`An image of ${restaurant.name} restaurant`}
          width={300}
          height={300}
          style={{ borderRadius: '4px', objectFit: 'cover' }}
        />
      </section>

      <section style={{ maxWidth: '400px', margin: '3rem auto 0' }}>
        <h3 style={{ textAlign: 'center' }}>Location 📍</h3>
        <p style={{ padding: '6px 0' }}>
          {restaurant.neighborhood} - {restaurant.address}
        </p>
      </section>

      <AddToFavorites id={id} />
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '3rem'
        }}
      >
        <h3>Reviews</h3>
        {!restaurant.reviews?.length
          ? 'No reviews yet'
          : restaurant.reviews.map((review, i) => {
              return (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '10px',
                    alignItems: 'center'
                  }}
                >
                  <section>
                    <p style={{ fontWeight: 700, padding: '8px 2px' }}>
                      By: {review.name} - Date: {review.date}📅 - Rating: {review.rating}⭐
                    </p>
                  </section>
                  <section style={{ maxWidth: '600px' }}>
                    <p>{review.comment}</p>
                  </section>
                </div>
              )
            })}
      </section>
    </>
  )
}
