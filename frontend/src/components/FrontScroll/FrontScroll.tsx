import React, { useRef } from 'react'
import {
  BubbleOneBlurry,
  BubbleThree,
  BubbleTwo,
} from '../AnimatedBubble/AnimatedBubble.styled'
import DragAnimationWrapper from '../AnimationWrappers/DragAnimationWrapper'
import {
  Heading,
  Subtitle,
  TextWrapper,
  TopLine,
} from '../InfoSection/InfoSection.styled'
import Meatball from '../Meatballs/Meatball'
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
import back from '../../data/assets/back.png'
import { MeatballContainer } from '../Meatballs/Meatballs.styled'
interface FrontScrollProps {}

const FrontScroll: React.FC<FrontScrollProps> = () => {
  const constraintsRef = useRef(null)
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
            <GlassCardContainer ref={constraintsRef}>
              <DragAnimationWrapper constraintsRef={constraintsRef}>
                <GlassCardSeven>
                  <TextWrapper>
                    {/* <MeatballContainer>
                      <Meatball
                        img={back}
                        alt='back muscles'
                        width='7em'
                        height='7em'
                      />
                    </MeatballContainer> */}
                    <TopLine variant='bluegreen'>topline</TopLine>
                    <Heading variant='tertiary'>
                      Kim jest trener medyczny?
                    </Heading>
                    <Subtitle variant='tertiary'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ad totam voluptatem sunt minus! Deserunt ab nesciunt
                      omnis. Officia, nostrum saepe.
                    </Subtitle>
                  </TextWrapper>
                </GlassCardSeven>
              </DragAnimationWrapper>
              <GlassCardTwo>
                <TextWrapper>
                  <TopLine variant='bluegreen'>Kurs BLACKROLL® Therapy</TopLine>
                  <Heading variant='tertiary'>Uprawnienia </Heading>
                  <Subtitle variant='tertiary'>
                    Jestem absolwentką pierwszej edycji rocznego szkolenia
                    BLACKROLL® Therapy, dającego uprawnienia trenera medycznego.
                  </Subtitle>
                </TextWrapper>
              </GlassCardTwo>
              <GlassCardThree>
                <TextWrapper>
                  <TopLine variant='bluegreen'>AWF</TopLine>
                  <Heading variant='tertiary'>Fizjoterapia</Heading>
                  <Subtitle variant='tertiary'>
                    Zgłębiam wiedzę na wydziale Fizjoterapi Warszawskiej
                    Akademii Wychowania Fizycznego.
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
