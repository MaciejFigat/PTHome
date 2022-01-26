import React from 'react'
import DropAnimationWrapper from '../../AnimationWrappers/DropAnimationWrapper'
import FadeInAnimationWrapper from '../../AnimationWrappers/FadeInAnimationWrapper'
import ContactIcons from '../../SvgIcon/ContactIcons'
import mirror from '../../../data/assets/mirror.jpg'
import {
  HeaderContainer,
  HeaderTitle,
  HeaderList,
  HeaderItem,
  // HeaderSubtitle,
  WrapperContainer,
} from './frontPageHeader.styled'
import Meatball from '../../Meatballs/Meatball'

interface FrontPageHeaderProps {
  title: string
  subtitle: string
}

const FrontPageHeader: React.FC<FrontPageHeaderProps> = ({
  title,
  subtitle,
}) => {
  return (
    <WrapperContainer>
      <HeaderContainer>
        <HeaderList>
          <HeaderItem>
            <FadeInAnimationWrapper>
              <Meatball
                version='header'
                img={mirror}
                alt='back muscles'
                width='4em'
                height='4em'
              />
            </FadeInAnimationWrapper>
          </HeaderItem>
          {/* <HeaderItem>
            <FadeInAnimationWrapper>
              <HeaderSubtitle>{subtitle}</HeaderSubtitle>
            </FadeInAnimationWrapper>
          </HeaderItem> */}
          <HeaderItem>
            <DropAnimationWrapper direction='left' delay={2}>
              <HeaderTitle>{title}</HeaderTitle>
            </DropAnimationWrapper>
          </HeaderItem>
          <HeaderItem>
            <ContactIcons />
          </HeaderItem>
        </HeaderList>
      </HeaderContainer>
    </WrapperContainer>
  )
}
export default FrontPageHeader
