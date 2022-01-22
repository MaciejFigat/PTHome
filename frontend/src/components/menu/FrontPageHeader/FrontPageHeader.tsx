import React from 'react'
import DropAnimationWrapper from '../../AnimationWrappers/DropAnimationWrapper'
import FadeInAnimationWrapper from '../../AnimationWrappers/FadeInAnimationWrapper'
import { Wrapper } from '../../Cards/Cards.styled'
import ContactIcons from '../../SvgIcon/ContactIcons'

import {
  HeaderContainer,
  HeaderTitle,
  HeaderList,
  HeaderItem,
  HeaderSubtitle,
  WrapperContainer,
} from './frontPageHeader.styled'

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
              <HeaderSubtitle>{subtitle}</HeaderSubtitle>
            </FadeInAnimationWrapper>
          </HeaderItem>
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
