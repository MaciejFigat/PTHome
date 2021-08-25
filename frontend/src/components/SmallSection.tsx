import React from 'react'
import {
  SectionContainer,
  SectionTitle,
  SectionDescription,
} from '../styles/sectionSmall'
interface SmallSectionProps {
  title: string
  description?: string
  variant?: 'dark' | 'light' | 'primary' | 'secondary'
}

const SmallSection: React.FC<SmallSectionProps> = ({
  title,
  description,
  variant,
}) => {
  return (
    <SectionContainer variant={variant}>
      <SectionTitle>{title}</SectionTitle>
      <SectionDescription>{description}</SectionDescription>
    </SectionContainer>
  )
}
export default SmallSection
