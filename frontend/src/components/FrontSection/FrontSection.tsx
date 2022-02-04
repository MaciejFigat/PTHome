import React from 'react'
import {
  BubbleThree,
  BubbleOne,
  FloatingWrapperCustom,
  WrapperImgPosition,
  ImgSmall,
  BubbleOneBlurry,
} from '../AnimatedBubble/AnimatedBubble.styled'
import FadeInAnimationWrapper from '../AnimationWrappers/FadeInAnimationWrapper'
import { FrontHeader, FrontSec, FrontTopline } from './FrontSection.styled'
import Adrenaline from '../../data/assets/Adrenaline.svg'

interface FrontSectionProps {}

const FrontSection: React.FC<FrontSectionProps> = () => {
  return (
    <FrontSec>
      <FadeInAnimationWrapper>
        <FrontTopline>Nina K. </FrontTopline>
        <FrontHeader>Trener Medyczny </FrontHeader>
        <BubbleOne />
        <BubbleThree />
        <WrapperImgPosition>
          <FloatingWrapperCustom
            top='80%'
            left='36%'
            opacity='0.15'
            content='Adrenaline'
          >
            <ImgSmall src={Adrenaline} />
          </FloatingWrapperCustom>
        </WrapperImgPosition>
        <BubbleOneBlurry
          width='5rem'
          variant='secondary'
          opacity='0.2'
          top='49%'
          right='18%'
          animationFloatDuration='18s'
          animationDuration='53s'
        />
        <BubbleOneBlurry
          width='9rem'
          variant='tertiary'
          opacity='0.27'
          top='29%'
          right='78%'
          animationFloatDuration='23s'
          animationDuration='53s'
        />
      </FadeInAnimationWrapper>
    </FrontSec>
  )
}
export default FrontSection
