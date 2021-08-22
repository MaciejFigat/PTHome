import React from 'react'
import {
  CardContainerSecondary,
  CardSecondary,
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
    <CardContainerSecondary variant={variant}>
      {cardData &&
        cardData.map((example) => (
          <CardSecondary key={example.id} variant={variant}>
            <CardTitle>{example.title}</CardTitle>
            <CardContent>{example.description}</CardContent>
          </CardSecondary>
        ))}
    </CardContainerSecondary>
  )
}
export default SectionCardsv2
