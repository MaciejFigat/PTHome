import styled from 'styled-components'
import { handleGlassColor } from './utilsGlass'

export const GlassCardContainer = styled.div`
  padding-top: 3rem;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5rem;
  @media (max-width: 880px) {
    gap: 2rem;
  }
  @media (max-width: 400px) {
    max-width: 95vw;
  }
`

export const GlassTextWrapper = styled.div`
  position: relative;
  /* top: -100px; */
  /* max-width: 80%; */
  /* right: -200px; */
`
export const ToplineGlass = styled.div`
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
  font-size: 22px;
  font-weight: 500;
  line-height: 1.8rem;
  letter-spacing: 0.025em;
  /* subtitleColor */
  ${(props) => handleGlassColor(props).subtitleColor}
  @media (max-width: 880px) {
    font-size: 20px;
  }
  @media (max-width: 580px) {
    font-size: 18px;
  }
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
  padding-top: ${(props) => (props.paddingTop ? props.paddingTop : '3rem')};
  border: 1px solid rgba(255, 255, 255, 0.125);
  /* max-height: fit-content; */
  max-width: 40vw;
  max-width: 450px;
  /* min-height: 400px; */
  margin-right: 0.5rem;
  @media (max-width: 880px) {
    min-width: 340px;
    padding: 2rem;
    padding-top: ${(props) => (props.paddingTop ? props.paddingTop : '3rem')};
  }
  @media (max-width: 580px) {
    margin-right: 0.25rem;
    margin-left: 0.25rem;
    max-width: 90vw;
    min-width: 300px;
    left: 0 !important;
  }
  @media (max-width: 400px) {
    margin-right: 0;
    margin-left: 0;
    max-width: 85vw;
    min-width: 250px;
    /* min-width: 300px; */
  }
  @media (max-width: 340px) {
    min-width: 200px;
    padding: 1.75rem;
    padding-right: 0.75rem;
    padding-top: ${(props) => (props.paddingTop ? props.paddingTop : '3rem')};
    /* max-width: 95%; */
  }
  @media (max-width: 300px) {
    /* min-width: 200px; */
  }
`
