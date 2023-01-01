import { createContext, useState } from 'react'
import api from '../services/api'
export const AuthContext = createContext()

export default function AuthProvider({ children }) {
  const [isAuth, setAuth] = useState(() => {
    if (typeof window !== 'undefined') {
      const token = JSON.parse(window.localStorage.getItem('token'))
      if (token) return true
      return false
    }
  })

  const authenticateUser = async (data) => {
    if (typeof window !== 'undefined') {
      const tokenFromServer = await api.login(data)
      if (tokenFromServer) {
        localStorage.setItem('token', JSON.stringify(tokenFromServer))
        setAuth(true)
      }

      return tokenFromServer
    }
  }

  const createUser = async (data) => {
    const request = await api.signUp(data)
    return request
  }

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        authenticateUser,
        createUser
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
