import styled, { keyframes } from 'styled-components'

export const ResponsiveDiv = styled.div`
  display: grid;
  place-items: left;
  border-radius: 4px;
  width: 40vw;
  padding: 0px 0px 10px;
  backdrop-filter: blur(5px) saturate(144%);
  -webkit-backdrop-filter: blur(5px) saturate(144%);
  background-color: rgba(17, 75, 11, 0.61);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  transition: all 0.6s ease-out;

  @media (max-width: 1100px) {
    width: 90vw;
    padding: 10px 10px 10px;
  }
`
export const FormContainerDiv = styled.div`
  display: grid;
  place-items: center;
`
export const ContactFormContainer = styled.div`
  display: grid;
  place-items: center;
`
export const ContactFormStyled = styled.form`
  width: 85%;

  margin-top: 2rem;
  @media (max-width: 798px) {
    min-width: fit-content;
  }
`

const gradient = keyframes`
  0% {
    border-image:  linear-gradient(
        45deg,
        var(--background-tertiary5),
        var(--background-tertiary4),
        var(--background-tertiary3)
      )
      1;
  }
  50% {
    border-image: linear-gradient(
            45deg,
            var(--background-tertiary3),
            var(--background-tertiary1),
            var(--background-tertiary5)
          )
          1;
  }
  100% {
    border-image:  linear-gradient(
        45deg,
        var(--background-tertiary5),
        var(--background-tertiary4),
        var(--background-tertiary3)
      )
      1;
  }
`
export const ContactField = styled.div`
  font-family: 'Quicksand', sans-serif;
  display: flex;
  flex-direction: column;
  text-align: left;

  &:after {
    content: '';
    display: block;
    position: relative;
    bottom: 24px;
    left: 0;
    width: 100%;
    height: 5px;
    --angle: 0deg;
    border-bottom: 2px solid;
    /* border-image: linear-gradient(
        45deg,
        var(--background-tertiary5),
        var(--background-tertiary4),
        var(--background-tertiary3)
      )
      1;
    transition: all 0.9s ease-out; */
    /* @media (min-width: 600px) {
      ${ResponsiveDiv}:hover & {
        border-image: linear-gradient(
            45deg,
            var(--background-tertiary3),
            var(--background-tertiary1),
            var(--background-tertiary5)
          )
          1;
      }
    } */

    animation: ${gradient} 33s ease-in-out infinite;
  }
`

export const ContactFieldContent = styled.input`
  &::placeholder {
    color: var(--background-tertiary3);
    font-weight: 500;
    @media (max-width: 600px) {
      color: var(--background-secondary3);
    }
  }
  font-family: 'Quicksand', sans-serif;
  outline: none;
  border: none;
  color: var(--background-tertiary4);
  transition: all 0.3s ease-out;

  background: none;
  line-height: 1.2;
  cursor: text;
  min-height: fit-content;
  max-height: 45px;
  font-size: 15px;
  line-height: 1.2;
  padding: 0.8rem 1.2rem;
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
`
export const SendButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  max-width: 100%;
  margin-bottom: 1.5rem;
`
