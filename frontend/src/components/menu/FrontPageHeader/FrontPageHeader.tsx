import React from 'react'
import DropAnimationWrapper from '../../AnimationWrappers/DropAnimationWrapper'
import FadeInAnimationWrapper from '../../AnimationWrappers/FadeInAnimationWrapper'
import ContactIcons from '../../SvgIcon/ContactIcons'
import back from '../../../data/assets/back.webp'
import {
  HeaderContainer,
  HeaderTitle,
  HeaderList,
  HeaderItem,
  WrapperContainer,
} from './frontPageHeader.styled'
import Meatball from '../../Meatballs/Meatball'

interface FrontPageHeaderProps {
  title: string
}

const FrontPageHeader: React.FC<FrontPageHeaderProps> = ({ title }) => {
  return (
    <WrapperContainer>
      <HeaderContainer>
        <HeaderList>
          <HeaderItem>
            <FadeInAnimationWrapper>
              <Meatball
                version='header'
                img={back}
                alt='back muscles'
                width='4em'
                height='4em'
              />
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
