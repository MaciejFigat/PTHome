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
} from '../GlassCard/GlassCard.styled'
import GlassCardMain from '../GlassCard/GlassCardMain'
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
              <GlassCardMain
                variant='tertiary'
                topline='testingTopline tertiary'
                heading='heading testing 1'
                subtitle=' Dzięki ugruntowanej wiedzy obejmującej dziedziny anatomii,
                      fizjologii, diagnostki oraz biomechaniki, trener medyczny
                      jest w stanie pracować z klientami wymagającymi
                      zaawansowanej strategii treningowej.'
              />
              <GlassCardMain
                variant='dark'
                left='-30vw'
                topline='testingTopline dark'
                heading='heading testing 2'
                subtitle='Dzięki ugruntowanej wiedzy obejmującej dziedziny anatomii,
                      fizjologii, diagnostki oraz biomechaniki, trener medyczny
                      jest w stanie pracować z klientami wymagającymi
                      zaawansowanej strategii treningowej.'
              />
              <GlassCardMain
                variant='tertiary'
                topline='testingTopline tertiary'
                heading='heading testing 1'
                subtitle=' Dzięki ugruntowanej wiedzy obejmującej dziedziny anatomii,
                      fizjologii, diagnostki oraz biomechaniki, trener medyczny
                      jest w stanie pracować z klientami wymagającymi
                      zaawansowanej strategii treningowej.'
              />
              <GlassCardMain
                variant='dark'
                topline='testingTopline dark'
                heading='heading testing 2'
                subtitle='Dzięki ugruntowanej wiedzy obejmującej dziedziny anatomii,
                      fizjologii, diagnostki oraz biomechaniki, trener medyczny
                      jest w stanie pracować z klientami wymagającymi
                      zaawansowanej strategii treningowej.'
              />
              <GlassCardMain
                variant='tertiary'
                topline='testingTopline tertiary'
                heading='heading testing 1'
                subtitle=' Dzięki ugruntowanej wiedzy obejmującej dziedziny anatomii,
                      fizjologii, diagnostki oraz biomechaniki, trener medyczny
                      jest w stanie pracować z klientami wymagającymi
                      zaawansowanej strategii treningowej.'
              />
              <GlassCardMain
                variant='dark'
                topline='testingTopline dark'
                heading='heading testing 2'
                subtitle='Dzięki ugruntowanej wiedzy obejmującej dziedziny anatomii,
                      fizjologii, diagnostki oraz biomechaniki, trener medyczny
                      jest w stanie pracować z klientami wymagającymi
                      zaawansowanej strategii treningowej.'
              />
              <GlassCardMain
                variant='tertiary'
                topline='testingTopline tertiary'
                heading='heading testing 1'
                subtitle=' Dzięki ugruntowanej wiedzy obejmującej dziedziny anatomii,
                      fizjologii, diagnostki oraz biomechaniki, trener medyczny
                      jest w stanie pracować z klientami wymagającymi
                      zaawansowanej strategii treningowej.'
              />
              <GlassCardMain
                variant='dark'
                topline='testingTopline dark'
                heading='heading testing 2'
                subtitle='Dzięki ugruntowanej wiedzy obejmującej dziedziny anatomii,
                      fizjologii, diagnostki oraz biomechaniki, trener medyczny
                      jest w stanie pracować z klientami wymagającymi
                      zaawansowanej strategii treningowej.'
              />
              <GlassCardMain
                variant='tertiary'
                topline='testingTopline tertiary'
                heading='heading testing 1'
                subtitle=' Dzięki ugruntowanej wiedzy obejmującej dziedziny anatomii,
                      fizjologii, diagnostki oraz biomechaniki, trener medyczny
                      jest w stanie pracować z klientami wymagającymi
                      zaawansowanej strategii treningowej.'
              />
              <GlassCardMain
                variant='secondary'
                topline='testingTopline secondary'
                heading='heading testing 2'
                subtitle='Dzięki ugruntowanej wiedzy obejmującej dziedziny anatomii,
                      fizjologii, diagnostki oraz biomechaniki, trener medyczny
                      jest w stanie pracować z klientami wymagającymi
                      zaawansowanej strategii treningowej.'
              />
              <GlassCardMain
                variant='tertiary'
                topline='testingTopline tertiary'
                heading='heading testing 1'
                subtitle=' Dzięki ugruntowanej wiedzy obejmującej dziedziny anatomii,
                      fizjologii, diagnostki oraz biomechaniki, trener medyczny
                      jest w stanie pracować z klientami wymagającymi
                      zaawansowanej strategii treningowej.'
              />
              <GlassCardMain
                variant='dark'
                topline='testingTopline dark'
                heading='heading testing 2'
                subtitle='Dzięki ugruntowanej wiedzy obejmującej dziedziny anatomii,
                      fizjologii, diagnostki oraz biomechaniki, trener medyczny
                      jest w stanie pracować z klientami wymagającymi
                      zaawansowanej strategii treningowej.'
              />
              {/* <DragAnimationWrapper constraintsRef={constraintsRef}>
                <GlassCardSeven>
                  <TextWrapper>
                    <TopLine variant='bluegreen'>strategia treningowa</TopLine>
                    <Heading variant='tertiary'>
                      Kim jest trener medyczny?
                    </Heading>
                    <Subtitle variant='blue'>
                      Dzięki ugruntowanej wiedzy obejmującej dziedziny anatomii,
                      fizjologii, diagnostki oraz biomechaniki, trener medyczny
                      jest w stanie pracować z klientami wymagającymi
                      zaawansowanej strategii treningowej. Brane są pod uwagę
                      szczególne charakterystyki dotyczące stanu zdrowia
                      klienta.
                    </Subtitle>
                  </TextWrapper>
                </GlassCardSeven>
              </DragAnimationWrapper>
              <GlassCardTwo>
                <TextWrapper>
                  <TopLine variant='bluegreen'>Kurs BLACKROLL® Therapy</TopLine>
                  <Heading variant='tertiary'>Uprawnienia </Heading>
                  <Subtitle variant='dark'>
                    Jestem absolwentką pierwszej edycji rocznego szkolenia
                    BLACKROLL® Therapy, dającego uprawnienia trenera medycznego.
                  </Subtitle>
                </TextWrapper>
              </GlassCardTwo>
              <GlassCardThree>
                <TextWrapper>
                  <TopLine variant='bluegreen'>AWF</TopLine>
                  <Heading variant='blue'>Fizjoterapia</Heading>
                  <Subtitle variant='tertiary'>
                    Zgłębiam wiedzę na wydziale Fizjoterapi Warszawskiej
                    Akademii Wychowania Fizycznego.
                  </Subtitle>
                </TextWrapper>
              </GlassCardThree>
              <GlassCard>
                <TextWrapper>
                  <TopLine variant='bluegreen'>
                    korzyści treningu medycznego
                  </TopLine>
                  <Heading variant='tertiary'>
                    Co zyskujemy inwestując w tak specjalistyczny trening?
                  </Heading>
                  <Subtitle variant='tertiary'>
                    Podstawowym celem jest poprawa jakości ruchu i możliwości
                    motorycznych klienta, a także ograniczanie dolegliwości
                    takich jak ból i dyskomfort. Bieżące stosowanie testów
                    pozwala na modyfikowanie ćwiczeń oraz uzyskanie postępu,
                    przy jednoczesnym zachowaniu bezpieczeństwa.
                  </Subtitle>
                </TextWrapper>
              </GlassCard>
              <GlassCardFour>
                <TextWrapper>
                  <TopLine variant='bluegreen'>
                    współpraca z profesjonalistami
                  </TopLine>
                  <Heading variant='tertiary'>
                    Czy można łączyć ten tryb treningu z inną opieką medyczną?
                  </Heading>
                  <Subtitle variant='tertiary'>
                    Trener medyczny nie zastępuje opieki lekarskiej czy
                    fizjoterapeutycznej. Dzięki współpracy z personelem
                    medycznym i stosowaniu się do ram zaleceń jest w stanie
                    odpowiednio modyfikować ćwiczenia i monitorować wszelką
                    aktywność na siłowni. Umiejętności dostosowawcze zwiększają
                    efektywność klienta w dążeniu do odzyskania sprawności.
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
              </GlassCardSeven> */}
            </GlassCardContainer>
          </>
        }
      />
    </>
  )
}
export default FrontScroll
