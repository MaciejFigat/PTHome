import React from 'react'
import { FrontHeader, FrontSec } from './FrontSection.styled'

interface FrontSectionProps {}

const FrontSection: React.FC<FrontSectionProps> = () => {
  return (
    <FrontSec>
      <FrontHeader>Trener Medyczny</FrontHeader>
    </FrontSec>
  )
}
export default FrontSection
