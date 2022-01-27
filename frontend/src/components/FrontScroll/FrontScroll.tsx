import React, { useRef } from 'react'
import {
  BubbleOneBlurry,
  BubbleThree,
  BubbleTwo,
} from '../AnimatedBubble/AnimatedBubble.styled'
import Scroll2 from '../ScrollSection/Scroll2'
import { GlassCardContainer } from '../GlassCard/GlassCard.styled'
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
                variant='dark'
                topline='kim jestem'
                heading='Witaj, nazywam się Nina!'
                subtitle='Jestem trenerem personalnym i medycznym z wieloletnim doświadczeniem. Ukończyłam wiele specjalistycznych kursów dotyczących metod treningowych. Jestem studentką Fizjoterapii AWF.'
              />
              <GlassCardMain
                variant='tertiary'
                left='-30vw'
                topline='wyzwania i bezpieczeństwo'
                heading=' Kim jest trener medyczny?'
                subtitle='Jest to specjalista posiadający dodatkowe kompetencje z zakresu anatomii, fizjologii, diagnostki oraz biomechaniki w treningu. Trener medyczny jest w stanie pracować z klientami wymagającymi zaawansowanej strategii treningowej.'
              />
              <GlassCardMain
                variant='secondary'
                left='-20vw'
                topline='Kurs BLACKROLL® Therapy'
                heading='Uprawnienia '
                subtitle=' Jestem absolwentką pierwszej edycji rocznego szkolenia
                BLACKROLL® Therapy, dającego uprawnienia trenera medycznego.'
              />
              <GlassCardMain
                variant='primary'
                left='-10vw'
                topline='korzyści treningu medycznego'
                heading='Zysk z inwestycji w specjalistyczny trening'
                subtitle=' Podstawowym celem jest poprawa jakości ruchu i możliwości
                motorycznych klienta, a także ograniczanie dolegliwości
                takich jak ból i dyskomfort. Bieżące stosowanie testów
                pozwala na modyfikowanie ćwiczeń oraz uzyskanie postępu,
                przy jednoczesnym zachowaniu bezpieczeństwa.'
              />
              <GlassCardMain
                variant='dark'
                left='-20vw'
                topline='współpraca z profesjonalistami'
                heading='Czy można łączyć ten tryb treningu z inną opieką medyczną?'
                subtitle='Trener medyczny nie zastępuje opieki lekarskiej czy
                fizjoterapeutycznej. Dzięki współpracy z personelem
                medycznym i stosowaniu się do ram zaleceń jest w stanie
                odpowiednio modyfikować ćwiczenia i monitorować wszelką
                aktywność na siłowni. Zwiększa to
                efektywność klienta w dążeniu do celu oraz do odzyskania sprawności.'
              />
            </GlassCardContainer>
          </>
        }
      />
    </>
  )
}
export default FrontScroll
