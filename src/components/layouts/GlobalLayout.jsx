import { Toaster } from 'react-hot-toast'
import { HeaderContainer, MainContainer } from '../../styles/components/layouts/GloablLayout.styled'
import Navbar from '../Navbar'

export default function GlobalLayout({ classname, children }) {
  return (
    <>
      <HeaderContainer className={classname}>
        <Navbar />
      </HeaderContainer>
      <MainContainer className={classname}>{children}</MainContainer>
      <Toaster />
    </>
  )
}
