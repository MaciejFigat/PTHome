import React from 'react'
import {
  BubbleThree,
  BubbleOne,
  BubbleOneBlurry,
} from '../AnimatedBubble/AnimatedBubble.styled'
import FadeInAnimationWrapper from '../AnimationWrappers/FadeInAnimationWrapper'
import { FrontHeader, FrontSec, FrontTopline } from './FrontSection.styled'
import Adrenaline from '../../data/assets/Adrenaline.svg'
import {
  FloatingWrapperCustom,
  WrapperImgPosition,
  ImgSmall,
} from '../AnimatedBubble/AnimatedBubble.styled'
interface FrontSectionProps {}

const FrontSection: React.FC<FrontSectionProps> = () => {
  return (
    <FrontSec>
      <FadeInAnimationWrapper>
        <FrontTopline>Nina K. </FrontTopline>
        <FrontHeader>Trener Medyczny </FrontHeader>
        <BubbleOne />
        <BubbleThree />
        {/* <BubbleOneBlurry
          width='4rem'
          height='4rem'
          variant='primary'
          top='calc(70% - 12rem)'
          right='calc(25%)'
        /> */}
        <WrapperImgPosition>
          <FloatingWrapperCustom
            top='10%'
            left='0%'
            opacity='0.19'
            content='Adrenaline'
            floatOne
          >
            <ImgSmall src={Adrenaline} />
          </FloatingWrapperCustom>
        </WrapperImgPosition>
        <BubbleOneBlurry
          width='7rem'
          height='7rem'
          variant='primary'
          top='calc(70% - 12rem)'
          right='calc(25%)'
        />
      </FadeInAnimationWrapper>
    </FrontSec>
  )
}
export default FrontSection
