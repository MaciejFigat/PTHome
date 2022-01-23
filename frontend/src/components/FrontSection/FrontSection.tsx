import React from 'react'
import {
  BubbleThree,
  BubbleOne,
  BubbleOneBlurry,
} from '../AnimatedBubble/AnimatedBubble.styled'
import FadeInAnimationWrapper from '../AnimationWrappers/FadeInAnimationWrapper'
import { FrontHeader, FrontSec, FrontTopline } from './FrontSection.styled'

interface FrontSectionProps {}

const FrontSection: React.FC<FrontSectionProps> = () => {
  return (
    <FrontSec>
      <FadeInAnimationWrapper>
        <FrontTopline>Nina K.</FrontTopline>
        <FrontHeader>Trener Medyczny</FrontHeader>
        <BubbleThree />
        <BubbleOne />
        <BubbleOneBlurry top='calc(70% + 6rem)' right='calc(50% - 6rem)'>
          .
        </BubbleOneBlurry>
      </FadeInAnimationWrapper>
    </FrontSec>
  )
}
export default FrontSection
