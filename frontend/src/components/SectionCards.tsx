import React from 'react'
import {
  CardContainer,
  CardContainerDark,
  CardContainerPrimary,
  CardContainerSecondary,
  Card,
  CardDark,
  CardPrimary,
  CardSecondary,
  CardTitle,
  CardContent,
} from '../styles/sectionCards'
interface SectionCardsProps {
  cardData: { id: Number; title: String; description: String }[]
  variant?: 'dark' | 'light' | 'primary' | 'secondary'
}

const SectionCards: React.FC<SectionCardsProps> = ({ cardData, variant }) => {
  return (
    <>
      {variant === 'dark' && (
        <CardContainerDark>
          {cardData &&
            cardData.map((example) => (
              <CardDark key={example.id}>
                <CardTitle>{example.title}</CardTitle>
                <CardContent>{example.description}</CardContent>
              </CardDark>
            ))}
        </CardContainerDark>
      )}
      {variant === 'primary' && (
        <CardContainerPrimary>
          {cardData &&
            cardData.map((example) => (
              <CardPrimary key={example.id}>
                <CardTitle>{example.title}</CardTitle>
                <CardContent>{example.description}</CardContent>
              </CardPrimary>
            ))}
        </CardContainerPrimary>
      )}
      {variant === 'secondary' && (
        <CardContainerSecondary>
          {cardData &&
            cardData.map((example) => (
              <CardSecondary key={example.id}>
                <CardTitle>{example.title}</CardTitle>
                <CardContent>{example.description}</CardContent>
              </CardSecondary>
            ))}
        </CardContainerSecondary>
      )}
      {!variant && (
        <CardContainer>
          {cardData &&
            cardData.map((example) => (
              <Card key={example.id}>
                <CardTitle>{example.title}</CardTitle>
                <CardContent>{example.description}</CardContent>
              </Card>
            ))}
        </CardContainer>
      )}
    </>
  )
}
export default SectionCards
