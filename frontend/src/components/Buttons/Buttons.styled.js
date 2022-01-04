import styled from 'styled-components'
import { handleButtonColor } from './utilsButton'

export const SendButton = styled.button`
  /* buttonBackground */
  ${(props) => handleButtonColor(props).buttonBackground}
  ${(props) => handleButtonColor(props).buttonColor}
  &:active:hover {
    ${(props) => handleButtonColor(props).buttonColorActive}
  }
  /* color for the link inside the button */
  a {
    ${(props) => handleButtonColor(props).buttonColor}
  }

  &:hover {
    transition: all 0.3s ease-out;
    /* buttonBackgroundHover */
    ${(props) => handleButtonColor(props).buttonBackgroundHover}
    /* buttonColorHover */
    ${(props) => handleButtonColor(props).buttonColorHover}
    /* buttonColor as color for the link nested inside the Button */
    border: none;
    ${(props) => handleButtonColor(props).buttonBorderHover};
    a {
      transition: all 0.3s ease-out;
      ${(props) => handleButtonColor(props).buttonColorHover}
    }
  }
  font-family: 'Quicksand', sans-serif;
  outline: none;
  border: none;
  ${(props) => handleButtonColor(props).buttonBorder};
  padding: ${({ large }) => (large ? '12px 40px 38px' : '10px 20px 25px')};
  font-size: ${({ fontLarge }) => (fontLarge ? '20px' : '14px')};
  margin: 5px 0px 5px 10px;
  cursor: pointer;
  max-width: 20%;
  min-width: fit-content;
  height: 3vh;
  min-height: 25px;
  border-radius: 3px;
  font-weight: 700;
  text-align: center;
  transition: 0.5s;
  &:active {
    opacity: 0.9;
    ${(props) => handleButtonColor(props).buttonBorderActive}

    a {
      ${(props) => handleButtonColor(props).buttonColorActive}
    }
  }
  @media (max-width: 798px) {
    height: 2vh;
    min-height: 30px;
    font-size: ${({ fontLarge }) => (fontLarge ? '18px' : '12px')};
    margin: 0;
    margin-top: 10px;
    margin-left: 10px;
  }
`
