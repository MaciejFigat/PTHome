import React from 'react'
import {
  BubbleOne,
  BubbleTwo,
  BubbleThree,
  BubbleWrapper,
  BubbleFour,
  BubbleFive,
} from './AnimatedBubble.styled'

interface AnimatedBubbleProps {}

const AnimatedBubble: React.FC<AnimatedBubbleProps> = () => {
  return (
    <BubbleWrapper>
      <BubbleOne>One</BubbleOne>

      <BubbleTwo>Two</BubbleTwo>
      <BubbleThree>Three</BubbleThree>
      <BubbleFour>Four</BubbleFour>
      <BubbleFive>fIVE</BubbleFive>
    </BubbleWrapper>
  )
}
export default AnimatedBubble
