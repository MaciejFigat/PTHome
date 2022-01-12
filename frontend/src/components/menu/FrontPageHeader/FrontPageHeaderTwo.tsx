import React from 'react'
import DropAnimationWrapper from '../../AnimationWrappers/DropAnimationWrapper'
import FadeInAnimationWrapper from '../../AnimationWrappers/FadeInAnimationWrapper'
import ContactIcons from '../../SvgIcon/ContactIcons'

import {
  HeaderContainer,
  HeaderTitle,
  HeaderList,
  HeaderItem,
} from './frontPageHeader.styled'

interface FrontPageHeaderTwoProps {
  title: string
  subtitle: string
}

const FrontPageHeaderTwo: React.FC<FrontPageHeaderTwoProps> = ({
  title,
  subtitle,
}) => {
  return (
    <HeaderContainer>
      <HeaderList>
        <HeaderItem>
          <FadeInAnimationWrapper>
            <HeaderTitle>{subtitle}</HeaderTitle>
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
  )
}
export default FrontPageHeaderTwo
