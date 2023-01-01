import {
  HomeContainer,
  HomeList,
  HomeListElement,
  HomeTitle
} from '../styles/components/Home.styled'

const elementsList = [
  'Discover new restaurants ❔',
  'Add restaurants you know 🍽️',
  'Add as favorites the restaurants that you like the most 😋',
  'Modify the data of a restaurant if you think they are incorrect ❌',
  'Remove restaurants you do not like 🗑️'
]
export default function Home() {
  return (
    <>
      <HomeContainer>
        <HomeTitle>What can you do on this website ?</HomeTitle>
        <HomeList>
          {elementsList.map((element, i) => (
            <HomeListElement key={i}>{element}</HomeListElement>
          ))}
        </HomeList>
      </HomeContainer>
    </>
  )
}
