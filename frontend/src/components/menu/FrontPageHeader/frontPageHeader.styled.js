import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  height: fit-content;
  max-width: 100%;
  /* background: var(--background1-main); */
  /* background: var(--background-blue6); */
  /* background: var(--background-tertiary25); */
  /* background: linear-gradient(
    180deg,
    var(--background2-main),
    var(--background1-main)
  ); */
  /* background: linear-gradient(
    145deg,
    var(--background2-main),
    var(--background-blue6)
  ); */
  background: linear-gradient(
    90deg,
    var(--background2-main),
    var(--background1-main),
    var(--background1-main),
    var(--background1-main),
    var(--background1-main),
    var(--background2-main)
  );
  /* box-shadow: inset 20px 20px 40px #171718, inset -20px -20px 40px #252526; */
  z-index: 22;
  @media (max-width: 1020px) {
    display: none;
  }
`
export const HeaderTitle = styled.h1`
  color: var(--background4-main);
  font-size: 1.75rem;
  font-weight: 400;

  @media (max-width: 1220px) {
    font-size: 1.5rem;
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
