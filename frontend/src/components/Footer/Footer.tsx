import React from 'react'
import {
  FooterContainer,
  FooterSection,
  FooterSectionHeading,
  FooterSectionText,
  FormInput,
  FotterForm,
} from './Footer.styled'
import { Button } from '../InfoSection/InfoSection.styled'
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
        <FotterForm>
          <FormInput
            name='email'
            type='email'
            placeholder='your email if you wish to subscribe'
          ></FormInput>
          <Button variant='tertiary'>Subscribe to me </Button>
        </FotterForm>
      </FooterSection>
    </FooterContainer>
  )
}
export default Footer
