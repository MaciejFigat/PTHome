import React, { useRef, useState, useEffect } from 'react'
import DragAnimationWrapper from '../AnimationWrappers/DragAnimationWrapper'
import Oxytocin from '../../data/assets/Oxytocin.svg'
import {
  BubbleOne,
  BubbleTwo,
  BubbleThree,
  BubbleWrapper,
  OverflowWrapper,
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setVanish(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [vanish])

  return (
    <OverflowWrapper>
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
        <BubbleFive onClick={bubbleHandler} vanish={vanish}>
          fIVE
        </BubbleFive>
        {/* <BubbleFive>fIVE</BubbleFive> */}
      </BubbleWrapper>
    </OverflowWrapper>
  )
}
export default AnimatedBubble
