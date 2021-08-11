import React from 'react'
import {
  CardContainer,
  CardDark,
  CardTitle,
  CardContent,
} from '../styles/sectionCards'
interface SectionDarkCardsProps {
  cardData: { id: Number; title: String; description: String }[]
}

const SectionDarkCards: React.FC<SectionDarkCardsProps> = ({ cardData }) => {
  return (
    <CardContainer>
      {cardData &&
        cardData.map((example) => (
          <CardDark key={example.id}>
            <CardTitle>{example.title}</CardTitle>
            <CardContent>{example.description}</CardContent>
          </CardDark>
        ))}
    </CardContainer>
  )
}
export default SectionDarkCards
