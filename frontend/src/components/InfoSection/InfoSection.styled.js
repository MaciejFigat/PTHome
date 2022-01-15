import styled from 'styled-components'
import { handleSectionColor } from './utilsSection'
// handleSectionColor includes these

// sectionBackground
// color
// subtitleColor
// headingColor
// toplineColor
// buttonColor
// buttonBackground
// buttonBackgroundHover
//  buttonBackgroundColor

export const InfoSec = styled.div`
  ${(props) => handleSectionColor(props).color}
  ${({ paddingTop }) =>
    paddingTop === 'small' ? 'padding: 10px 0;' : 'padding: 160px 0;'};

  ${(props) => handleSectionColor(props).sectionBackground}
  ${(props) => handleSectionColor(props).sectionBackgroundGradient}
  @media (max-width: 880px) {
    padding: 60px 0;
  }
  @media (max-width: 380px) {
    padding: 10px 0;
  }
`
export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  align-items: center;
  flex-direction: ${({ imgStart }) =>
    imgStart === true ? 'row-reverse' : 'row'};
  @media (max-width: 880px) {
    flex-direction: ${({ imgStart }) =>
      imgStart === true ? 'column-reverse' : 'column'};
    /* flex-direction: column-reverse; */
  }
`
export const InfoColumn = styled.div`
  margin-bottom: 15px;
  margin-right: 15px;
  padding-left: 15px;
  flex: 1;
  flex-basis: 50%;
  @media screen and (min-width: 770px) {
    max-width: 100%;
    display: flex;
    justify-content: center;
  }
`
export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60;
  @media screen and (max-width: 770px) {
    padding-bottom: 25px;
  }
`
export const Container = styled.div`
  z-index: 1;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-right: 50px;
  padding-left: 50px;
  @media screen and (max-width: 991px) {
    padding-right: 20px;
    padding-left: 20px;
  }
`

export const Button = styled.button`
  border-radius: 4px;
  white-space: nowrap;
  min-width: fit-content;
  padding: ${({ large }) => (large ? '12px 64px' : '10px 20px')};
  font-size: ${({ fontLarge }) => (fontLarge ? '22px' : '16px')};
  /* buttonBackground */
  ${(props) => handleSectionColor(props).buttonBackground}
  outline: none;
  cursor: pointer;
  border: none;
  transition: all 0.3s ease-in;
  /* buttonColor */
  ${(props) => handleSectionColor(props).buttonColor}
  /* color for the link inside the button */
  a {
    ${(props) => handleSectionColor(props).buttonColor}
  }
  &:hover {
    transition: all 0.3s ease-in;
    /* buttonBackgroundHover */
    ${(props) => handleSectionColor(props).buttonBackgroundHover}
    /* buttonColorHover */
    ${(props) => handleSectionColor(props).buttonColorHover}
    /* buttonColor as color for the link nested inside the Button */
  a {
      transition: all 0.3s ease-out;
      ${(props) => handleSectionColor(props).buttonColorHover}
    }
  }

  @media screen and (max-width: 760px) {
    padding: ${({ large }) => (large ? '8px 14px' : '6px 12px')};
    font-size: ${({ fontLarge }) => (fontLarge ? '18px' : '16px')};
  }
`
export const ButtonLink = styled.a`
  /* buttonColor */
  /* ${(props) => handleSectionColor(props).buttonColor} */
  /* buttonColorHover */
  ${Button}:hover & {
    /* transition: all 0.3s ease-out; */
    /* for some reason the props are not read in this instance REMIND ME to check for issues in styled-components */
    /* ${(props) => handleSectionColor(props).buttonColorHover} */
  }
`
export const TopLine = styled.div`
  /* toplineColor */
  ${(props) => handleSectionColor(props).toplineColor}
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 10px;
`
export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  /* headingColor */
  color: ${(props) => handleSectionColor(props).headingColor};

  @media screen and (max-width: 760px) {
    font-size: 36px;
  }
`
export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  /* line-height: 24px; */
  line-height: 1.6rem;
  letter-spacing: 0.025em;
  /* subtitleColor */
  ${(props) => handleSectionColor(props).subtitleColor}
`
export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ imgStart }) => (imgStart ? 'flex-start' : 'flex-end')};
  @media (max-width: 880px) {
    padding-bottom: 20px;
  }
`
export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`
