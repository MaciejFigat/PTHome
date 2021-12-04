import styled from 'styled-components'
import { handleButtonColor } from './utilsButton'

export const ResponsiveDiv = styled.div`
  display: grid;
  place-items: left;
  border-radius: 10px;
  width: 80vw;
  padding: 40px 50px 20px;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  background: var(--background1-main);
  box-shadow: inset 8px 8px 16px #0b0b0d, inset -8px -8px 16px #25272b;

  @media (max-width: 1024px) {
    width: 85vw;
    padding: 20px 20px 20px;
  }
  @media (max-width: 768px) {
    width: 90vw;
    padding: 10px 10px 10px;
  }
`
export const FormContainerDiv = styled.div`
  display: grid;
  place-items: center;
  @media (min-width: 1191px) {
    padding-top: 110px;
    padding-bottom: 110px;
  }
`
export const ContactFormContainer = styled.div`
  display: grid;
  place-items: center;
`
export const ContactFormStyled = styled.form`
  width: 85%;
  margin-top: 2rem;
  @media (min-width: 640px) and (max-width: 798px) {
    margin-top: 40px;
    min-width: fit-content;
  }
  @media (max-width: 639px) {
    min-width: fit-content;
  }
`
export const ContactField = styled.div`
  font-family: 'Quicksand', sans-serif;
  display: flex;
  flex-direction: column;
  text-align: left;

  label {
    color: var(--secondary2);
    font-weight: 700;
    @media (max-width: 798px) {
      font-size: 15px;
    }
  }
  &:after {
    content: '';
    display: block;
    position: relative;
    bottom: 24px;
    left: 0;
    width: 100%;
    height: 2px;
    --angle: 0deg;
    border-bottom: 2px solid;
    border-image: linear-gradient(
        45deg,
        var(--secondary1),
        var(--secondary2),
        var(--secondary3)
      )
      1;
    animation: 8s rotate linear infinite;
  }
`

export const ContactFieldContent = styled.input`
  &::placeholder {
    color: var(--background4-main);
    font-weight: 300;
  }

  font-family: 'Quicksand', sans-serif;
  outline: none;
  border: none;
  color: var(--background5-main);
  background: none;
  line-height: 1.2;
  cursor: text;
  /* min-height: 90%; */
  /* max-height: 45px; */

  font-size: 15px;
  line-height: 1.2;
  padding: 0.8rem 1.2rem;
  /* min-width: 60vw; */
  margin-bottom: 20px;
  transition: 1.9s;
  font-weight: 600;

  @media (max-width: 798px) {
    font-size: 15px;
    font-weight: 500;
  }
`

export const MessageField = styled(ContactFieldContent)`
  min-height: 25vh;
  resize: none;
  overflow-y: auto;
  /* textarea {
    width: 80%;
    min-height: 90%;
  } */
`
export const SendButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  max-width: 100%;
  margin-bottom: 1.5rem;
`

export const SendButton = styled.button`
  /* buttonBackground */
  ${(props) => handleButtonColor(props).buttonBackground}
  ${(props) => handleButtonColor(props).buttonColor}
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
  a {
      transition: all 0.3s ease-out;
      ${(props) => handleButtonColor(props).buttonColorHover}
    }
  }
  font-family: 'Quicksand', sans-serif;
  outline: none;
  border: none;
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

  @media (max-width: 798px) {
    padding: 5px 10px 25px;
    height: 2vh;
    min-height: 20px;
    font-size: 15px;
    font-weight: 600;
    margin: 0;
  }
`
