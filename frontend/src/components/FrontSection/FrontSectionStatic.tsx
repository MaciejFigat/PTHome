import React from 'react'
import {
  BubbleOneBlurryStatic,
  BubbleOneStatic,
  BubbleThreeStatic,
  FloatingWrapperStatic,
  ImgSmall,
} from '../AnimatedBubble/AnimatedBubble.styled'
import FadeInAnimationWrapper from '../AnimationWrappers/FadeInAnimationWrapper'
import {
  FrontHeader,
  FrontSecStatic,
  FrontTopline,
} from './FrontSection.styled'
import Adrenaline from '../../data/assets/Adrenaline.svg'

interface FrontSectionStaticProps {}

const FrontSectionStatic: React.FC<FrontSectionStaticProps> = () => {
  return (
    <FrontSecStatic>
      <FadeInAnimationWrapper>
        <FrontTopline>Nina K. </FrontTopline>
        <FrontHeader>Trener Medyczny </FrontHeader>
        <BubbleOneStatic />
        <BubbleThreeStatic />

        <FloatingWrapperStatic
          top='10%'
          left='0%'
          opacity='0.19'
          content='Adrenaline'
        >
          <ImgSmall src={Adrenaline} />
        </FloatingWrapperStatic>

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
    </FrontSecStatic>
  )
}
export default FrontSectionStatic
