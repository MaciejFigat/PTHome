import React from 'react'
import Oxytocin from '../../data/assets/Oxytocin.svg'
import Adrenaline from '../../data/assets/Adrenaline.svg'
import {
  BubbleOverlay,
  BubbleThree,
  ImgSmallTwo,
  ImgSmall,
  FloatingWrapperCustom,
  BubbleOne,
  WrapperImgPosition,
} from './AnimatedBubble.styled'
import FadeInAnimationWrapper from '../AnimationWrappers/FadeInAnimationWrapper'
interface AnimatedOverlayProps {}

const AnimatedOverlay: React.FC<AnimatedOverlayProps> = () => {
  return (
    <FadeInAnimationWrapper>
      <BubbleOverlay>
        <WrapperImgPosition>
          <FloatingWrapperCustom
            top='10%'
            left='37%'
            content='Oxytocin'
            floatTwo
          >
            <ImgSmallTwo src={Oxytocin} />
          </FloatingWrapperCustom>
          <FloatingWrapperCustom
            top='40%'
            left='60%'
            content='Adrenaline'
            floatOne
          >
            <ImgSmall src={Adrenaline} />
          </FloatingWrapperCustom>
        </WrapperImgPosition>
        <BubbleOne />
        <BubbleThree />
      </BubbleOverlay>
    </FadeInAnimationWrapper>
  )
}
export default AnimatedOverlay
