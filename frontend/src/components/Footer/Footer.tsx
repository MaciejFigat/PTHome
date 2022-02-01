import React from 'react'
import {
  FooterContainer,
  FooterSection,
  FooterSectionHeading,
  FooterSectionText,
  FooterMedia,
  FooterMediaWrapper,
  FooterIcon,
  FooterRights,
  SocialIcons,
  SocialIconLink,
} from './Footer.styled'
import Serotonin from '../../data/assets/Serotonin.svg'
import BetaEndorphineSmall from '../../data/assets/BetaEndorphineSmall.png'
import {
  ImgSmall,
  FloatingWrapperCustom,
  WrapperImgPosition,
  ImgSmallTwo,
} from '../AnimatedBubble/AnimatedBubble.styled'

import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import HeaderSvg from '../menu/FrontPageHeader/HeaderSvg'

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
      <WrapperImgPosition>
        <FloatingWrapperCustom
          top='10%'
          left='37%'
          content='Beta Endorphine'
          floatTwo
        >
          <ImgSmallTwo src={BetaEndorphineSmall} />
        </FloatingWrapperCustom>
        <FloatingWrapperCustom
          top='40%'
          left='60%'
          content='Serotonin'
          floatOne
        >
          <ImgSmall src={Serotonin} />
        </FloatingWrapperCustom>
      </WrapperImgPosition>
      <FooterMedia>
        <FooterMediaWrapper>
          <HeaderSvg
            colorVisibleFill='#65d639'
            colorVisibleStroke='#57cf89'
            colorHiddenStroke='#487bb4'
            colorHiddenFill='#378eb6'
            version='sumo2'
          />
          <FooterRights>BestWorksYet &copy; 2021</FooterRights>
          <SocialIcons>
            <SocialIconLink
              href='https://www.poetryfoundation.org/play/75764'
              target='_blank'
              aria-label='Twitter'
            >
              <FooterIcon icon={faTwitter} />
            </SocialIconLink>
            <SocialIconLink
              href='https://www.poetryfoundation.org/play/75764'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FooterIcon icon={faLinkedin} />
            </SocialIconLink>
            <SocialIconLink
              href='https://www.poetryfoundation.org/play/75764'
              target='_blank'
              aria-label='Youtube'
              rel='noopener noreferrer'
            >
              <FooterIcon icon={faYoutube} />
            </SocialIconLink>
            <SocialIconLink
              href='https://www.poetryfoundation.org/play/75764'
              target='_blank'
              aria-label='Instagram'
            >
              <FooterIcon icon={faInstagram} />
            </SocialIconLink>
            <SocialIconLink
              href='https://www.poetryfoundation.org/play/75764'
              target='_blank'
              aria-label='Facebook'
            >
              <FooterIcon icon={faFacebook} />
            </SocialIconLink>
          </SocialIcons>
        </FooterMediaWrapper>
      </FooterMedia>
    </FooterContainer>
  )
}
export default Footer
