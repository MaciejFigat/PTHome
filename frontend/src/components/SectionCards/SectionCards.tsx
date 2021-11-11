import React from 'react'
import {
  CardContainer,
  Card,
  CardTitle,
  CardContent,
} from './sectionCards.styled'
interface SectionCardsProps {
  cardData: { id: Number; title: String; description: String }[]
  variant?: 'dark' | 'light' | 'primary' | 'secondary'
}

const SectionCards: React.FC<SectionCardsProps> = ({ cardData, variant }) => {
  return (
    <CardContainer variant={variant}>
      {cardData &&
        cardData.map((example) => (
          <Card key={example.id} variant={variant}>
            <CardTitle>{example.title}</CardTitle>
            <CardContent>{example.description}</CardContent>
          </Card>
        ))}
    </CardContainer>
  )
}
export default SectionCards
