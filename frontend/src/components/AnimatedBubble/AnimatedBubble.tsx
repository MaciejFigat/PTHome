import React, { useRef } from 'react'
import DragAnimationWrapper from '../AnimationWrappers/DragAnimationWrapper'
import Oxytocin from '../../data/assets/Oxytocin.svg'
// import OxytocinLabels from '../../data/assets/OxytocinLabels.png'
import {
  BubbleOne,
  BubbleTwo,
  BubbleThree,
  BubbleWrapper,
  BubbleFour,
  BubbleFive,
} from './AnimatedBubble.styled'
import { Img } from './AnimatedBubble.styled'

interface AnimatedBubbleProps {}

const AnimatedBubble: React.FC<AnimatedBubbleProps> = () => {
  const constraintsRef = useRef(null)

  return (
    <BubbleWrapper ref={constraintsRef}>
      <BubbleTwo>Two</BubbleTwo>
      <BubbleThree>Three</BubbleThree>
      <BubbleFour>Four</BubbleFour>
      {/* <DragAnimationWrapper constraintsRef={constraintsRef}>
        ddd.
      </DragAnimationWrapper> */}
      <Img src={Oxytocin} />

      {/* <DragAnimationWrapper constraintsRef={constraintsRef}> */}
      {/* <Img src={OxytocinLabels} /> */}
      {/* </DragAnimationWrapper> */}

      <DragAnimationWrapper constraintsRef={constraintsRef}>
        <BubbleOne>One</BubbleOne>
      </DragAnimationWrapper>
      <BubbleFive>fIVE</BubbleFive>
    </BubbleWrapper>
  )
}
export default AnimatedBubble
