import React from 'react'
import {
  FooterContainer,
  FooterSection,
  FooterSectionHeading,
  FooterSectionText,
  FormInput,
  FooterForm,
  FooterLinksWrapper,
  FooterLink,
  FooterLinksContainer,
  FooterLinksItems,
  FooterLinkTitle,
  FooterMedia,
  FooterMediaWrapper,
  FooterLogo,
  FooterIcon,
  FooterRights,
  SocialIcons,
  SocialIconLink,
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
        <FooterForm>
          <FormInput
            name='email'
            type='email'
            placeholder='your email if you wish to subscribe'
          ></FormInput>
          <Button variant='tertiary'>Subscribe to me </Button>
        </FooterForm>
      </FooterSection>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterLinkTitle>Lorem, ipsum dolor.</FooterLinkTitle>
            <FooterLink to='/'>Lorem, ipsum.</FooterLink>
            <FooterLink to='/'>Lorem, ipsum.</FooterLink>
            <FooterLink to='/'>Lorem, ipsum.</FooterLink>
            <FooterLink to='/'>Lorem, ipsum.</FooterLink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinkTitle>Lorem, ipsum dolor.</FooterLinkTitle>
            <FooterLink to='/'>Lorem, ipsum.</FooterLink>
            <FooterLink to='/'>Lorem, ipsum.</FooterLink>
            <FooterLink to='/'>Lorem, ipsum.</FooterLink>
            <FooterLink to='/'>Lorem, ipsum.</FooterLink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinkTitle>Lorem, ipsum dolor.</FooterLinkTitle>
            <FooterLink to='/'>Lorem, ipsum.</FooterLink>
            <FooterLink to='/'>Lorem, ipsum.</FooterLink>
            <FooterLink to='/'>Lorem, ipsum.</FooterLink>
            <FooterLink to='/'>Lorem, ipsum.</FooterLink>
          </FooterLinksItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <FooterMedia>
        <FooterMediaWrapper>
          <FooterLogo>
            <FooterIcon />
          </FooterLogo>
          <FooterRights>copyright 2021</FooterRights>
          <SocialIcons>
            <SocialIconLink
              href='https://www.poetryfoundation.org/play/75764'
              target='_blank'
            >
              Lorem ipsum dolor sit.
            </SocialIconLink>
            <SocialIconLink
              href='https://www.poetryfoundation.org/play/75764'
              target='_blank'
            >
              Lorem ipsum dolor sit.
            </SocialIconLink>
            <SocialIconLink
              href='https://www.poetryfoundation.org/play/75764'
              target='_blank'
            >
              Lorem ipsum dolor sit.
            </SocialIconLink>
            <SocialIconLink
              href='https://www.poetryfoundation.org/play/75764'
              target='_blank'
            >
              Lorem ipsum dolor sit.
            </SocialIconLink>
          </SocialIcons>
        </FooterMediaWrapper>
      </FooterMedia>
    </FooterContainer>
  )
}
export default Footer
