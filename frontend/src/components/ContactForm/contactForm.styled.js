import styled from 'styled-components'

export const ResponsiveDiv = styled.div`
  display: grid;
  place-items: left;
  border-radius: 4px;
  width: 40vw;
  padding: 40px 50px 20px;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  background: var(--background-tertiary2);

  @media (max-width: 860px) {
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
export const ContactField = styled.div`
  font-family: 'Quicksand', sans-serif;
  display: flex;
  flex-direction: column;
  text-align: left;

  label {
    color: var(--background-tertiary3);
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
    height: 5px;
    --angle: 0deg;
    border-bottom: 3px solid;
    border-image: linear-gradient(
        45deg,
        var(--background-tertiary3),
        var(--background-tertiary1),
        var(--background-tertiary5)
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
  color: var(--background-tertiary3);
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
