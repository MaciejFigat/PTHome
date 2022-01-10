import React from 'react'
import {
  CardBody,
  CardsWrapper,
  Wrapper,
  CardH2,
  CardImage,
  CardP,
} from './Cards.styled'

interface CardsProps {
  data: { img: any; title: string; text: string }[]
}

const Cards: React.FC<CardsProps> = ({ data }) => {
  return (
    <Wrapper>
      <CardsWrapper>
        {data.map(({ title, img, text }) => (
          <CardBody key={title}>
            <CardImage src={img} />
            <CardH2>{title}</CardH2>
            <CardP>{text}</CardP>
          </CardBody>
        ))}
      </CardsWrapper>
    </Wrapper>
  )
}
export default Cards
