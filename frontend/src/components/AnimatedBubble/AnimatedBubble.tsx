import React, { useRef, useState } from 'react'
import DragAnimationWrapper from '../AnimationWrappers/DragAnimationWrapper'
import Oxytocin from '../../data/assets/Oxytocin.svg'
import {
  BubbleOne,
  BubbleTwo,
  BubbleThree,
  BubbleWrapper,
  BubbleFour,
  BubbleFive,
  FlotingWrapper,
  Img,
} from './AnimatedBubble.styled'

interface AnimatedBubbleProps {}

const AnimatedBubble: React.FC<AnimatedBubbleProps> = () => {
  const constraintsRef = useRef(null)
  const [vanish, setVanish] = useState<boolean>(false)
  const bubbleHandler = () => {
    setVanish(true)
  }

  return (
    <BubbleWrapper ref={constraintsRef}>
      <BubbleTwo>Two</BubbleTwo>
      <BubbleThree>Three</BubbleThree>
      <BubbleFour>Four</BubbleFour>
      {/* <DragAnimationWrapper constraintsRef={constraintsRef}>
        ddd.
      </DragAnimationWrapper> */}
      <FlotingWrapper>
        <Img src={Oxytocin} />
      </FlotingWrapper>

      {/* <DragAnimationWrapper constraintsRef={constraintsRef}> */}
      {/* <Img src={OxytocinLabels} /> */}
      {/* </DragAnimationWrapper> */}

      <DragAnimationWrapper constraintsRef={constraintsRef}>
        <BubbleOne>One</BubbleOne>
      </DragAnimationWrapper>
      <BubbleFive
        onClick={bubbleHandler}
        className={`${vanish === true ? 'vanish' : ''}`}
      >
        fIVE
      </BubbleFive>
      {/* <BubbleFive>fIVE</BubbleFive> */}
    </BubbleWrapper>
  )
}
export default AnimatedBubble
