import { useRouter } from 'next/router'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useTheme } from 'styled-components'
import { useAuth } from '../hooks/useAuth'
import { useRestaurants } from '../hooks/useRestaurants'
import {
  ToastButton1,
  ToastButton2,
  ToastButtonsContainer,
  ToastContainer,
  ToastQuestion
} from '../styles/components/DeleteConfirmationToast.style'
import { RestaurantCardDeleteButton } from '../styles/components/RestaurantCard.styled.'
import DeleteIcon from './icons/DeleteIcon'

export default function DeleteRestaurantButton({ id }) {
  const { deleteById } = useRestaurants()
  const [clicked, setClicked] = useState(false)
  const router = useRouter()
  const { isAuth } = useAuth()

  const theme = useTheme()
  const handleClick = async (e) => {
    e.stopPropagation()
    if (!isAuth) router.push('/auth/login')
    toast(
      (t) => (
        <ToastContainer>
          <ToastQuestion>Are you sure?</ToastQuestion>
          <ToastButtonsContainer>
            <ToastButton1
              onClick={() => {
                if (clicked) {
                  return
                }
                setClicked(true)
                deleteById(id)
                toast.dismiss(t.id)
              }}
            >
              Delete
            </ToastButton1>
            <ToastButton2 onClick={() => toast.dismiss(t.id)}>Cancel</ToastButton2>
          </ToastButtonsContainer>
        </ToastContainer>
      ),
      {
        style: {
          backgroundColor: theme.colors.toast.background,
          border: `1px solid ${theme.colors.toast.border}`
        }
      }
    )
    // deleteById(id)
  }
  return (
    <RestaurantCardDeleteButton onClick={handleClick}>
      <DeleteIcon />
    </RestaurantCardDeleteButton>
  )
}
