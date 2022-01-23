import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  place-items: center;
`
export const CardBody = styled.div`
  height: 400px;
  width: 300px;
  min-width: 100%;
  transition: 0.3s;
`
export const CardsWrapper = styled.div`
  margin-top: 3rem;
  margin-bottom: 1rem;
  display: grid;
  max-width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 2rem;
  place-items: center;
  @media screen and (min-width: 1670px) {
    max-width: 1500px;
  }
  @media screen and (max-width: 470px) {
    margin-top: 1rem;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }

  &:hover > ${CardBody} {
    opacity: 0.2;
  }
  &:hover > ${CardBody}:hover {
    opacity: 1;
  }
`

export const CardH2 = styled.h2`
  margin: 10px 0px 1.45rem;
  padding: 0px;
  display: grid;
  place-items: center;
  font-weight: bold;
  text-rendering: optimizelegibility;
  font-size: 1.62671rem;
  line-height: 1.1;
`

export const CardP = styled.p`
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.2;

  margin-bottom: 1.5rem;
  text-align: center;
`
export const CardImage = styled.img`
  padding-right: 0;
  border: 0;
  object-fit: contain;
  max-width: fit-content;
  max-height: 300px;
  overflow: hidden;
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  /* object-position: center; */
  transition: 200ms transform ease-in-out;
`
export const CardImageSmall = styled(CardImage)`
  max-height: calc(100vh / 8);
`
