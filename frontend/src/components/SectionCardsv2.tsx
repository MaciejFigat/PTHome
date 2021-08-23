import React from 'react'
import {
  CardContainer,
  Card,
  CardTitle,
  CardContent,
} from '../styles/sectionCards'
interface SectionCardsPropsv2 {
  cardData: { id: Number; title: String; description: String }[]
  variant?: 'dark' | 'light' | 'primary' | 'secondary'
}

const SectionCardsv2: React.FC<SectionCardsPropsv2> = ({
  cardData,
  variant,
}) => {
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
export default SectionCardsv2
