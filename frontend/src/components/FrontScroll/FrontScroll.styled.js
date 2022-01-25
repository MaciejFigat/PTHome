import styled from 'styled-components'

export const GlassCardContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
`
export const GlassCard = styled.div`
  position: relative;
  backdrop-filter: blur(11px) saturate(123%);
  -webkit-backdrop-filter: blur(11px) saturate(123%);
  background-color: rgba(91, 141, 39, 0.62);
  border-radius: 12px;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.125);
  max-width: 40vw;
  @media (max-width: 880px) {
    min-width: 340px;
  }
  @media (max-width: 580px) {
    margin-right: 0.5rem;
    margin-left: 0.5rem;
    max-width: 55vw;
    left: 0 !important;
  }
  @media (max-width: 440px) {
    max-width: 90vw;
    min-width: 300px;
  }
  @media (max-width: 440px) {
    min-width: 240px;
  }
  @media (max-width: 300px) {
    min-width: 200px;
  }
`
export const GlassCardTwo = styled(GlassCard)`
  left: -30vw;
  backdrop-filter: blur(11px) saturate(159%);
  -webkit-backdrop-filter: blur(11px) saturate(159%);
  background-color: rgba(250, 153, 14, 0.49);
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);
`

export const GlassCardThree = styled(GlassCard)`
  left: -20vw;
  backdrop-filter: blur(11px) saturate(159%);
  -webkit-backdrop-filter: blur(11px) saturate(159%);
  background-color: rgba(17, 75, 11, 0.49);
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);
`

export const GlassCardFour = styled(GlassCard)`
  left: -10vw;
  backdrop-filter: blur(11px) saturate(159%);
  -webkit-backdrop-filter: blur(11px) saturate(159%);
  background-color: rgba(173, 18, 63, 0.55);
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);
`

export const GlassCardFive = styled(GlassCard)`
  backdrop-filter: blur(11px) saturate(159%);
  -webkit-backdrop-filter: blur(11px) saturate(159%);
  background-color: rgba(163, 191, 137, 0.55);
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);
`
export const GlassCardSix = styled(GlassCard)`
  left: -10vw;
  backdrop-filter: blur(6px) saturate(129%);
  -webkit-backdrop-filter: blur(6px) saturate(129%);
  background-color: rgba(0, 194, 225, 0.31);
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);
`

export const GlassCardSeven = styled(GlassCard)`
  left: -20vw;
  backdrop-filter: blur(4px) saturate(129%);
  -webkit-backdrop-filter: blur(4px) saturate(129%);
  background-color: rgba(254, 123, 255, 0.49);
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);
`
