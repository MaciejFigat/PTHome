import styled from 'styled-components'

export const ResponsiveDiv = styled.div`
  display: grid;
  place-items: left;
  border-radius: 10px;
  width: 80vw;
  padding: 40px 50px 20px;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  background: var(--background-tertiary1);
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
    color: var(--text-main);
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
        var(--color2-shadow),
        var(--color1-shadow),
        var(--color2-shadow)
      )
      1;
    animation: 8s rotate linear infinite;
  }
`

export const ContactFieldContent = styled.input`
  &::placeholder {
    color: var(--text3-main);
    font-weight: 300;
  }
  font-family: 'Quicksand', sans-serif;
  outline: none;
  border: none;
  color: var(--text2-main);
  background: none;
  line-height: 1.2;
  cursor: text;
  min-height: fit-content;
  max-height: 45px;
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
`
export const SendButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  max-width: 100%;
  margin-bottom: 1.5rem;
`

export const SendButton = styled.button`
  font-family: 'Quicksand', sans-serif;
  outline: none;
  border: none;
  padding: 10px 20px 35px;
  margin: 5px 0px 5px 10px;
  cursor: pointer;
  max-width: 20%;
  min-width: fit-content;
  height: 3vh;
  min-height: 25px;
  border-radius: 3px;
  font-size: 20px;
  font-weight: 700;
  color: var(--text-main);
  background: var(--background1-main);
  box-shadow: inset 6px 6px 9px #1c1e24, inset -6px -6px 9px #343a44;
  text-align: center;
  transition: 0.5s;
  &:hover {
    transition: 0.5s;
    box-shadow: 0.05rem 0.1rem 0.3rem -0.03rem var(--color1-shadow);
  }
  &:active {
    background: var(--color1-secondary);
  }
  @media (max-width: 798px) {
    padding: 5px 10px 25px;
    height: 2vh;
    min-height: 20px;
    font-size: 15px;
    font-weight: 400;
    margin-left: 3px;
  }
`
