import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  height: fit-content;
  max-width: 100%;
  /* background: linear-gradient(
    90deg,
    var(--secondary5),
    var(--background-blue6)
  ); */
  /* var(--background2-main), */
  background-image: linear-gradient(
    90deg,
    hsl(12deg 76% 61%) 0%,
    hsl(17deg 79% 63%) 4%,
    hsl(21deg 81% 64%) 8%,
    hsl(24deg 85% 66%) 11%,
    hsl(20deg 72% 69%) 15%,
    hsl(327deg 31% 67%) 20%,
    hsl(256deg 49% 67%) 24%,
    hsl(230deg 89% 64%) 30%,
    hsl(220deg 86% 53%) 38%,
    hsl(215deg 76% 47%) 48%,
    hsl(208deg 79% 39%) 64%,
    hsl(195deg 89% 28%) 100%
  );

  z-index: 22;
  @media (max-width: 1020px) {
    display: none;
  }
`
export const HeaderTitle = styled.h1`
  color: var(--background5-main);
  font-size: 1.55rem;
  font-weight: 400;
  letter-spacing: 0.075em;
  @media (max-width: 1220px) {
    font-size: 1.5rem;
  }
`
export const HeaderSubtitle = styled(HeaderTitle)`
  transition: 0.3s;
  color: var(--secondary1);
  border-radius: 25%;
  &:hover {
    transition: 0.3s;
    /* color: var(--redblue5); */
    color: var(--background-tertiary4);
  }
`

export const HeaderList = styled.ul`
  justify-content: space-around;
  list-style: none;
  display: flex;
  align-items: center;
  width: 100vw;
  padding: 0;
  margin-top: 0.5rem;
  margin-bottom: 0.25rem;
`
export const HeaderItem = styled.li`
  margin-right: 1rem;
  font-size: 1.25rem;
  font-weight: 500;

  @media (max-width: 740px) {
    font-size: 1rem;
    margin-right: 0.25rem;
  }
`
export const HeaderSvgContainer = styled.div`
  height: 9vh;
  display: flex;
  place-content: center;
  overflow: hidden;
`
export const HeaderSvgItem = styled.svg`
  width: 96%;
  overflow: visible;
  stroke: var(--background4-main);
  stroke-width: 0.85;
  stroke-linejoin: round;
  stroke-linecap: round;
`
