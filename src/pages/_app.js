import { Inter } from '@next/font/google'
import GlobalLayout from '../components/layouts/GlobalLayout'
import AuthProvider from '../context/authContext'
import RestaurantsProvider from '../context/restaurantsContext'
import GlobalStyles from '../styles/GobalStyles'
import Theme from '../styles/Theme'

const inter = Inter({
  subsets: ['latin']
})

export default function App({ Component, pageProps }) {
  return (
    <Theme>
      <GlobalStyles />
      <AuthProvider>
        <GlobalLayout classname={inter.className}>
          <RestaurantsProvider>
            <Component {...pageProps} />
          </RestaurantsProvider>
        </GlobalLayout>
      </AuthProvider>
    </Theme>
  )
}
