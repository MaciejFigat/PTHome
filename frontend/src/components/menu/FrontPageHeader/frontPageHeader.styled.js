import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  height: fit-content;
  max-width: 100%;
  background: linear-gradient(
    90deg,
    var(--background2-main),
    var(--background-blue6)
  );
  /* background: linear-gradient(
    90deg,
    var(--background2-main),
    var(--background1-main),
    var(--background1-main),
    var(--background1-main),
    var(--background1-main),
    var(--background2-main)
  ); */

  z-index: 22;
  @media (max-width: 1020px) {
    display: none;
  }
`
export const HeaderTitle = styled.h1`
  color: var(--background4-main);
  font-size: 1.55rem;
  font-weight: 400;
  letter-spacing: 0.075em;
  @media (max-width: 1220px) {
    font-size: 1.5rem;
  }
`
export const HeaderSubtitle = styled(HeaderTitle)`
  transition: 0.3s;
  color: var(--secondary2);
  border-radius: 25%;
  &:hover {
    transition: 0.3s;
    color: var(--secondary5);
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
