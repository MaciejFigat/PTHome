import styled from 'styled-components'
import { handleSectionColor } from '../../styles/utilsSection'
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
  padding: 160px 0;

  ${(props) => handleSectionColor(props).sectionBackground}
`
export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  /* flex-wrap: wrap; */
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
`
export const InfoColumn = styled.div`
  margin-bottom: 15px;
  margin-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
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
    padding-bottom: 65px;
  }
`
export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 50px 0 50px;
  @media screen and (max-width: 991px) {
    padding: 0 30px 0 30px;
  }
`
export const Button = styled.button`
  border-radius: 4px;
  white-space: nowrap;
  padding: ${({ large }) => (large ? '12px 64px' : '10px 20px')};
  font-size: ${({ fontLarge }) => (fontLarge ? '22px' : '16px')};
  /* buttonBackground */
  ${(props) => handleSectionColor(props).buttonBackground}
  /* buttonColor */
 ${(props) => handleSectionColor(props).buttonColor}
 outline: none;
  cursor: pointer;
  border: none;
  &:hover {
    transition: all 0.3s ease-out;
    /* buttonBackgroundHover */
    ${(props) => handleSectionColor(props).buttonBackgroundHover}
    /* buttonColorHover */
        ${(props) => handleSectionColor(props).buttonColorHover}
  }
  @media screen and (max-width: 960px) {
    width: 100%;
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
  ${(props) => handleSectionColor(props).headingColor}
`
export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  /* subtitleColor */
  ${(props) => handleSectionColor(props).subtitleColor}
`
export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`
export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`
