import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-evenly;

  height: fit-content;
  max-width: 100%;
  background: var(--background1-main);
  box-shadow: inset 20px 20px 40px #171718, inset -20px -20px 40px #252526;
  z-index: 22;
`
export const HeaderTitle = styled.h1`
  color: var(--background4-main);
  font-size: 1.75rem;
  font-weight: 200;

  @media (max-width: 740px) {
    font-size: 1rem;
  }
`
export const HeaderList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0;
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
