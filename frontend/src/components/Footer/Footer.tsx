import React from 'react'
import {
  FooterContainer,
  FooterSection,
  FooterSectionHeading,
  FooterSectionText,
} from './Footer.styled'
interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <FooterContainer>
      <FooterSection>
        <FooterSectionHeading>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium,
          ab ea. Accusantium eligendi dolore perspiciatis.
        </FooterSectionHeading>
        <FooterSectionText>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, quia!
        </FooterSectionText>
      </FooterSection>
    </FooterContainer>
  )
}
export default Footer
