import React from 'react'
import {
  CardDark,
  CardTitle,
  CardContent,
  CardContainerDark,
} from '../styles/sectionCards'
interface SectionDarkCardsProps {
  cardData: { id: Number; title: String; description: String }[]
}

const SectionDarkCards: React.FC<SectionDarkCardsProps> = ({ cardData }) => {
  return (
    <CardContainerDark>
      {cardData &&
        cardData.map((example) => (
          <CardDark key={example.id}>
            <CardTitle>{example.title}</CardTitle>
            <CardContent>{example.description}</CardContent>
          </CardDark>
        ))}
    </CardContainerDark>
  )
}
export default SectionDarkCards
