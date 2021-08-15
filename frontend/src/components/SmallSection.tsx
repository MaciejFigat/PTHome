import React from 'react'
import {
  SectionContainer,
  SectionTitle,
  SectionDescription,
} from '../styles/sectionSmall'
interface SmallSectionProps {
  title: string
  description?: string
  variant?: string
}

const SmallSection: React.FC<SmallSectionProps> = ({ title, description }) => {
  return (
    <SectionContainer>
      <SectionTitle>{title}</SectionTitle>
      <SectionDescription>{description}</SectionDescription>
    </SectionContainer>
  )
}
export default SmallSection
