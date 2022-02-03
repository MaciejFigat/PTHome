import React from 'react'
import { BubbleOneBlurry } from '../AnimatedBubble/AnimatedBubble.styled'
import Scroll2 from '../ScrollSection/Scroll2'
import { GlassCardContainer } from '../GlassCard/GlassCard.styled'
import GlassCardMain from '../GlassCard/GlassCardMain'
import nina2 from '../../data/assets/nina2.jpg'
import acrylicSW1 from '../../data/assets/acrylicSW1.jpg'
import acrylicSW2 from '../../data/assets/acrylicSW2.jpg'
import acrylicSW3 from '../../data/assets/acrylicSW3.jpg'
import acrylicSW4 from '../../data/assets/acrylicSW4.jpg'
import { MeatballContainer } from '../Meatballs/Meatballs.styled'
import Meatball from '../Meatballs/Meatball'
import Serotonin from '../../data/assets/Serotonin.svg'
import Oxytocin from '../../data/assets/Oxytocin.svg'
import {
  FloatingWrapperCustom,
  WrapperImgPosition,
  ImgSmallTwo,
} from '../AnimatedBubble/AnimatedBubble.styled'

import FadeInWhenVisibleWrapper from '../AnimationWrappers/FadeInWhenVisibleWrapper'
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
            <WrapperImgPosition>
              <FloatingWrapperCustom
                top='15%'
                left='20%'
                opacity='0.07'
                content='Serotonin'
                floatTwo
              >
                <ImgSmallTwo src={Serotonin} />
              </FloatingWrapperCustom>

              <FloatingWrapperCustom
                top='57%'
                left='50%'
                opacity='0.22'
                content='Oxytocin'
                floatOne
              >
                <ImgSmallTwo src={Oxytocin} />
              </FloatingWrapperCustom>
            </WrapperImgPosition>
            <BubbleOneBlurry
              width='5rem'
              height='5rem'
              variant='tertiary'
              top='calc(70% - 12rem)'
              right='calc(-145%)'
            />
          </>
        }
        wideSection={
          <>
            {' '}
            <GlassCardContainer>
              <FadeInWhenVisibleWrapper>
                <GlassCardMain
                  variant='dark'
                  paddingTop='16rem'
                  topline='kim jestem'
                  heading='Witaj, nazywam się Nina!'
                  subtitle='Jestem trenerem personalnym i medycznym z wieloletnim doświadczeniem. Ukończyłam wiele specjalistycznych kursów dotyczących metod treningowych. Jestem studentką Fizjoterapii AWF.'
                >
                  <MeatballContainer top='-22px' right='-20%'>
                    <Meatball
                      height='79%'
                      width='99%'
                      translate='translate(-40px, -10%)'
                      img={nina2}
                      version='tertiary'
                      alt='trainer'
                    />
                  </MeatballContainer>
                </GlassCardMain>
              </FadeInWhenVisibleWrapper>
              <FadeInWhenVisibleWrapper>
                <GlassCardMain
                  variant='superDark'
                  paddingTop='12rem'
                  left='-10vw'
                  topline='wyzwania i bezpieczeństwo'
                  heading=' Kim jest trener medyczny?'
                  subtitle='Jest to specjalista posiadający dodatkowe kompetencje z zakresu anatomii, fizjologii, diagnostki oraz biomechaniki w treningu. Trener medyczny jest w stanie pracować z klientami wymagającymi zaawansowanej strategii treningowej.'
                >
                  {' '}
                  <MeatballContainer top='-80px' right='-20%'>
                    <Meatball
                      height='19%'
                      translate='rotate(180deg) translate(20px, 65%)'
                      width='99%'
                      img={acrylicSW3}
                      version='tertiary'
                      alt='trainer'
                    />
                  </MeatballContainer>
                </GlassCardMain>
              </FadeInWhenVisibleWrapper>

              <FadeInWhenVisibleWrapper>
                {' '}
                <GlassCardMain
                  variant='secondary'
                  paddingTop='13rem'
                  left='0vw'
                  topline='Kurs BLACKROLL® Therapy'
                  heading='Uprawnienia '
                  subtitle=' Jestem absolwentką pierwszej edycji rocznego szkolenia
                BLACKROLL® Therapy, dającego uprawnienia trenera medycznego. Ukończyłam również kurs trenera personalnego. Cyklicznie uczestniczę w specjalistycznych kursach i praktykach w placówkach medycznych.'
                >
                  {' '}
                  <MeatballContainer top='82px' right='-75%'>
                    <Meatball
                      height='79%'
                      width='89%'
                      translate='rotate(180deg) translate(130px, 75%)'
                      img={acrylicSW2}
                      version='tertiary'
                      alt='trainer'
                    />
                  </MeatballContainer>
                </GlassCardMain>{' '}
              </FadeInWhenVisibleWrapper>
              <FadeInWhenVisibleWrapper>
                {' '}
                <GlassCardMain
                  variant='tertiary'
                  paddingTop='7.5rem'
                  left='-10vw'
                  topline='Co zyskujemy?'
                  heading='Korzyści z treningu medycznego'
                  subtitle=' Podstawowym celem jest poprawa jakości ruchu i możliwości
                motorycznych klienta, a także ograniczanie dolegliwości
                takich jak ból i dyskomfort. Bieżące stosowanie testów
                pozwala na modyfikowanie ćwiczeń oraz uzyskanie postępu,
                przy jednoczesnym zachowaniu bezpieczeństwa.'
                >
                  {' '}
                  <MeatballContainer top='-227px' right='-25%'>
                    <Meatball
                      height='33%'
                      width='59%'
                      translate='rotate(125deg) translate(0px, 25%)'
                      img={acrylicSW1}
                      version='tertiary'
                      alt='trainer'
                    />
                  </MeatballContainer>
                </GlassCardMain>
              </FadeInWhenVisibleWrapper>
              <FadeInWhenVisibleWrapper>
                {' '}
                <GlassCardMain
                  variant='dark'
                  paddingTop='7.5rem'
                  left='0vw'
                  topline='współpraca z profesjonalistami'
                  heading='Czy można łączyć trening z inną opieką medyczną?'
                  subtitle='Trener medyczny nie zastępuje opieki lekarskiej czy
                fizjoterapeutycznej. Dzięki współpracy z personelem
                medycznym i stosowaniu się do ram zaleceń jest w stanie
                odpowiednio modyfikować ćwiczenia i monitorować wszelką
                aktywność na siłowni. Zwiększa to
                efektywność klienta w dążeniu do celu oraz do odzyskania sprawności.'
                >
                  {' '}
                  <MeatballContainer top='-42px' right='-75%'>
                    <Meatball
                      height='49%'
                      width='89%'
                      translate='rotate(180deg) translate(130px, 75%)'
                      img={acrylicSW4}
                      version='tertiary'
                      alt='trainer'
                    />
                  </MeatballContainer>
                </GlassCardMain>
              </FadeInWhenVisibleWrapper>
            </GlassCardContainer>
          </>
        }
      />
    </>
  )
}
export default FrontScroll
