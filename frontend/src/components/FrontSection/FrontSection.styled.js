import styled from 'styled-components'

export const FrontSec = styled.div`
  display: grid;
    place-items: center;
  min-height: calc(100vh - 120px);
  /* background-color: #a4dbe4; */
    background-image: 
        radial-gradient(at 47% 33%, hsl(188.44, 54%, 77%) 0, transparent 59%), 
        radial-gradient(at 62% 55%, hsl(334, 66%, 78%) 0, transparent 55%);
}
`
export const FrontTopline = styled.h3`
  display: none;
  letter-spacing: -0.065em;
  @media (max-width: 1020px) {
    font-size: 36px;
    display: block;
  }
  @media (max-width: 640px) {
    font-size: 33px;
  }
  @media (max-width: 490px) {
    font-size: 30px;
  }
  @media (max-width: 350px) {
    font-size: 28px;
  }
  color: var(--bluegreen5);
`
export const FrontHeader = styled.h1`
  position: relative;
  z-index: 2;
  color: var(--bluegreen5);
  font-size: 93px;
  font-weight: 900;
  letter-spacing: -0.065em;
  @media (max-width: 880px) {
    font-size: 73px;
  }
  @media (max-width: 640px) {
    font-size: 63px;
  }
  @media (max-width: 490px) {
    font-size: 43px;
  }
  @media (max-width: 350px) {
    font-size: 36px;
  }
`
