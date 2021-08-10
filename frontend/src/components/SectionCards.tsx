import React from 'react'
import {
  CardContainer,
  Card,
  CardTitle,
  CardContent,
} from '../styles/sectionCards'
interface SectionCardsProps {
  cardData: { id: Number; title: String; description: String }[]
}

const SectionCards: React.FC<SectionCardsProps> = ({ cardData }) => {
  return (
    <CardContainer>
      {cardData &&
        cardData.map((example) => (
          <Card key={example.id}>
            <CardTitle>{example.title}</CardTitle>
            <CardContent>{example.description}</CardContent>
          </Card>
        ))}
    </CardContainer>
  )
}
export default SectionCards
