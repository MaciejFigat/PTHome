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
    0deg,
    hsl(114deg 74% 17%) 0%,
    hsl(111deg 73% 19%) 16%,
    hsl(109deg 70% 21%) 32%,
    hsl(106deg 69% 23%) 46%,
    hsl(103deg 67% 25%) 58%,
    hsl(101deg 65% 27%) 69%,
    hsl(98deg 62% 29%) 78%,
    hsl(95deg 61% 31%) 85%,
    hsl(92deg 59% 33%) 92%,
    hsl(89deg 57% 35%) 100%
  );

  z-index: 22;
  @media (max-width: 1020px) {
    display: none;
  }
`
export const HeaderTitle = styled.h1`
  background: -webkit-linear-gradient(
    180deg,
    var(--bluegreen3),
    var(--bluegreen2)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  font-size: 1.55rem;
  font-weight: 800;
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
