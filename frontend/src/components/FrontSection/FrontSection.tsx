import React from 'react'
import {
  BubbleThree,
  BubbleOne,
  BubbleOneBlurryStatic,
} from '../AnimatedBubble/AnimatedBubble.styled'
import FadeInAnimationWrapper from '../AnimationWrappers/FadeInAnimationWrapper'
import { FrontHeader, FrontSec, FrontTopline } from './FrontSection.styled'
import Adrenaline from '../../data/assets/Adrenaline.svg'
import {
  FloatingWrapperStatic,
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
        <WrapperImgPosition>
          <FloatingWrapperStatic
            top='10%'
            left='0%'
            opacity='0.19'
            content='Adrenaline'
          >
            <ImgSmall src={Adrenaline} />
          </FloatingWrapperStatic>
        </WrapperImgPosition>
        <BubbleOneBlurryStatic
          width='5rem'
          variant='secondary'
          opacity='0.2'
          top='49%'
          right='18%'
        />
        <BubbleOneBlurryStatic
          width='7rem'
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
