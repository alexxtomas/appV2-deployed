import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

export const RestaurantPageAddNewLinkContainer = styled.div`
  min-width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 0;
`

export const RestaurantPageAddNewLink = styled(Link)`
  color: #fafafa;
  background-color: #009efa;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 14px;
  filter: grayscale(30%);
  transition: all 0.7s ease;

  :hover {
    filter: unset;
    scale: 1.1;
  }
`

export const RestaurantPageContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  column-gap: 3rem;
  row-gap: 3rem;
  margin-bottom: 3rem; ;
`

export const RestaurantCardContainer = styled.div`
  width: 200px;
  height: 220px;
  border: 1px solid ${({ theme }) => theme.colors.main.border};
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.5s ease;

  :hover {
    scale: 1.05;
  }
`
export const RestaurantCardImage = styled(Image).attrs(({ src, alt }) => ({
  width: 198,
  height: 100
}))`
  object-fit: cover;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`

export const RestaurantCardName = styled.p`
  font-size: 13px;
  margin-left: 7px;
  font-weight: 700;
`

export const RestaurantCardRating = styled.p`
  font-size: 13px;
  margin-left: 7px;
  font-weight: 400;
`

export const RestaurantCardCuisineType = styled.p`
  font-size: 13px;
  margin-left: 7px;
  font-weight: 280;
`

export const RestaurantCardButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  width: 100%;
  margin-top: 18px;
`

export const RestaurantCardEditButton = styled.button`
  border: none;
  background-color: #00c9a7;
  border-radius: 2px;
  padding: 0 18px;
  cursor: pointer;
  transition: all 0.5s ease;
  & svg {
    width: 20px;
    height: 20px;
  }
  :hover {
    scale: 1.1;
  }
`

export const RestaurantCardDeleteButton = styled.button`
  border: none;
  background-color: #d53624;
  border-radius: 2px;
  padding: 0 18px;
  cursor: pointer;
  transition: all 0.5s ease;
  & svg {
    width: 20px;
    height: 20px;
  }
  :hover {
    scale: 1.1;
  }
`
