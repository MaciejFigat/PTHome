import React from 'react'
import {
  BubbleThree,
  BubbleOne,
  BubbleOneBlurryStatic,
  FloatingWrapperCustom,
  WrapperImgPosition,
  ImgSmall,
} from '../AnimatedBubble/AnimatedBubble.styled'
import FadeInAnimationWrapper from '../AnimationWrappers/FadeInAnimationWrapper'
import { FrontHeader, FrontSec, FrontTopline } from './FrontSection.styled'
import Adrenaline from '../../data/assets/Adrenaline.svg'
// import {
//     WrapperImgPosition,
//   ImgSmall,
// } from '../AnimatedBubble/AnimatedBubble.styled'
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
        <BubbleOneBlurryStatic
          width='5rem'
          variant='secondary'
          opacity='0.2'
          top='49%'
          right='18%'
        />
        <BubbleOneBlurryStatic
          width='9rem'
          variant='tertiary'
          opacity='0.27'
          top='29%'
          right='78%'
        />
      </FadeInAnimationWrapper>
    </FrontSec>
  )
}
export default FrontSection
