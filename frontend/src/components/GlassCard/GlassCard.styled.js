import styled from 'styled-components'
import { handleGlassColor } from './utilsGlass'

export const GlassCardContainer = styled.div`
  padding-top: 3rem;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
`

export const GlassTextWrapper = styled.div`
  position: relative;
  /* top: -100px; */
  /* max-width: 80%; */
  /* right: -200px; */
`
export const ToplineGlass = styled.div`
  position: relative;
  top: 100%;
  /* right: -200px; */
  /* right: -50%; */
  /* toplineColor */
  ${(props) => handleGlassColor(props).toplineColor}
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 10px;
`
export const HeadingGlass = styled.h1`
  background: rgba(0, 0, 0, 0.015);
  margin-bottom: 24px;
  font-size: 42px;
  line-height: 1.1;
  /* headingColor */
  ${(props) => handleGlassColor(props).headingColor};

  @media screen and (max-width: 760px) {
    font-size: 36px;
  }
`
export const SubtitleGlass = styled.p`
  max-width: 440px;
  margin-bottom: 0;
  font-size: 18px;
  line-height: 1.6rem;
  letter-spacing: 0.025em;
  /* subtitleColor */
  ${(props) => handleGlassColor(props).subtitleColor}
`

export const GlassCard = styled.div`
  position: relative;
  overflow: hidden;
  left: ${(props) => (props.left ? props.left : '0')};
  /* backdrop-filter */
  ${(props) => handleGlassColor(props).backdropFilter};
  ${(props) => handleGlassColor(props).backdropFilterWebkit};
  /* background-color: rgba(91, 141, 39, 0.62); */
  /* background-color */
  ${(props) => handleGlassColor(props).cardBackground};

  border-radius: 12px;
  padding: 3rem;
  padding-top: 6rem;
  border: 1px solid rgba(255, 255, 255, 0.125);
  /* max-height: fit-content; */
  max-width: 40vw;
  @media (max-width: 880px) {
    min-width: 340px;
    padding: 2rem;
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
