import React, { useRef } from 'react'
// import DragAnimationWrapper from '../AnimationWrappers/DragAnimationWrapper'
import Oxytocin from '../../data/assets/Oxytocin.svg'
import {
  BubbleOne,
  BubbleTwo,
  BubbleThree,
  BubbleWrapper,
  BubbleFour,
  BubbleFive,
  FloatingWrapper,
  Img,
} from './AnimatedBubble.styled'

interface AnimatedBubbleProps {}

const AnimatedBubble: React.FC<AnimatedBubbleProps> = () => {
  const constraintsRef = useRef(null)

  return (
    <BubbleWrapper ref={constraintsRef}>
      <BubbleTwo />
      <BubbleThree />
      <BubbleFour />

      <FloatingWrapper content='Oxytocin'>
        <Img src={Oxytocin} />
      </FloatingWrapper>

      <BubbleOne />

      <BubbleFive />
    </BubbleWrapper>
  )
}
export default AnimatedBubble
