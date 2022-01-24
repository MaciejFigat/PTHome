import React from 'react'
import AnimatedBubble from '../AnimatedBubble/AnimatedBubble'
import {
  BubbleOneBlurry,
  BubbleThree,
  BubbleTwo,
} from '../AnimatedBubble/AnimatedBubble.styled'
import {
  Heading,
  Subtitle,
  TextWrapper,
  TopLine,
} from '../InfoSection/InfoSection.styled'
import Scroll2 from '../ScrollSection/Scroll2'
import {
  GlassCard,
  GlassCardContainer,
  GlassCardFive,
  GlassCardFour,
  GlassCardSeven,
  GlassCardSix,
  GlassCardThree,
  GlassCardTwo,
} from './FrontScroll.styled'
interface FrontScrollProps {}

const FrontScroll: React.FC<FrontScrollProps> = () => {
  return (
    <>
      <Scroll2
        widthBig='60%'
        widthSmall='40%'
        transparent
        narrowSection={
          <>
            <BubbleThree />
            <BubbleOneBlurry />
            <BubbleTwo />
          </>
        }
        wideSection={
          <>
            {' '}
            <GlassCardContainer>
              <GlassCardSeven>
                <TextWrapper>
                  <TopLine variant='bluegreen'>topline</TopLine>
                  <Heading variant='tertiary'>
                    Kim jest trener medyczny?
                  </Heading>
                  <Subtitle variant='tertiary'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                    totam voluptatem sunt minus! Deserunt ab nesciunt omnis.
                    Officia, nostrum saepe.
                  </Subtitle>
                </TextWrapper>
              </GlassCardSeven>
              <GlassCardTwo>
                <TextWrapper>
                  <TopLine variant='bluegreen'>topline</TopLine>
                  <Heading variant='tertiary'>
                    Kim jest trener medyczny?
                  </Heading>
                  <Subtitle variant='tertiary'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                    totam voluptatem sunt minus! Deserunt ab nesciunt omnis.
                    Officia, nostrum saepe.
                  </Subtitle>
                </TextWrapper>
              </GlassCardTwo>
              <GlassCardThree>
                <TextWrapper>
                  <TopLine variant='bluegreen'>topline</TopLine>
                  <Heading variant='tertiary'>
                    Kim jest trener medyczny?
                  </Heading>
                  <Subtitle variant='tertiary'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                    totam voluptatem sunt minus! Deserunt ab nesciunt omnis.
                    Officia, nostrum saepe.
                  </Subtitle>
                </TextWrapper>
              </GlassCardThree>
              <GlassCard>
                <TextWrapper>
                  <TopLine variant='bluegreen'>topline</TopLine>
                  <Heading variant='tertiary'>
                    Kim jest trener medyczny?
                  </Heading>
                  <Subtitle variant='tertiary'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                    totam voluptatem sunt minus! Deserunt ab nesciunt omnis.
                    Officia, nostrum saepe.
                  </Subtitle>
                </TextWrapper>
              </GlassCard>
              <GlassCardFour>
                <TextWrapper>
                  <TopLine variant='bluegreen'>topline</TopLine>
                  <Heading variant='tertiary'>
                    Kim jest trener medyczny?
                  </Heading>
                  <Subtitle variant='tertiary'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                    totam voluptatem sunt minus! Deserunt ab nesciunt omnis.
                    Officia, nostrum saepe.
                  </Subtitle>
                </TextWrapper>
              </GlassCardFour>
              <GlassCardFive>
                <TextWrapper>
                  <TopLine variant='bluegreen'>topline</TopLine>
                  <Heading variant='tertiary'>
                    Kim jest trener medyczny?
                  </Heading>
                  <Subtitle variant='tertiary'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                    totam voluptatem sunt minus! Deserunt ab nesciunt omnis.
                    Officia, nostrum saepe.
                  </Subtitle>
                </TextWrapper>
              </GlassCardFive>
              <GlassCardSix>
                <TextWrapper>
                  <TopLine variant='bluegreen'>topline</TopLine>
                  <Heading variant='tertiary'>
                    Kim jest trener medyczny?
                  </Heading>
                  <Subtitle variant='tertiary'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                    totam voluptatem sunt minus! Deserunt ab nesciunt omnis.
                    Officia, nostrum saepe.
                  </Subtitle>
                </TextWrapper>
              </GlassCardSix>
              <GlassCardSeven>
                <TextWrapper>
                  <TopLine variant='bluegreen'>topline</TopLine>
                  <Heading variant='tertiary'>
                    Kim jest trener medyczny?
                  </Heading>
                  <Subtitle variant='tertiary'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                    totam voluptatem sunt minus! Deserunt ab nesciunt omnis.
                    Officia, nostrum saepe.
                  </Subtitle>
                </TextWrapper>
              </GlassCardSeven>
            </GlassCardContainer>
          </>
        }
      />
    </>
  )
}
export default FrontScroll
