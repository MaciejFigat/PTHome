import React from 'react'
import {
  BubbleOne,
  BubbleTwo,
  BubbleThree,
  BubbleWrapper,
} from './AnimatedBubble.styled'

interface AnimatedBubbleProps {}

const AnimatedBubble: React.FC<AnimatedBubbleProps> = ({}) => {
  return (
    <BubbleWrapper>
      <BubbleOne>One</BubbleOne>
      <BubbleTwo>Two</BubbleTwo>
      <BubbleThree>Three</BubbleThree>
    </BubbleWrapper>
  )
}
export default AnimatedBubble
