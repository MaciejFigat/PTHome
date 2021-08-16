import styled from 'styled-components'

export const TransitionWrapperMain = styled.div`
  position: sticky;
  top: 0;
  .active {
    transition: all 200ms ease-in;
  }
  .hidden {
    transition: all 300ms ease-in;
    transform: translateY(-100%);
  }
`
export const TransitionWrapper = styled.div`
  position: sticky;
  top: 0;
  min-width: 100vw;
  max-height: 3rem;
  background: var(--background1-main);
  .active {
    transition: all 200ms ease-in;
  }
  .hidden {
    transition: all 300ms ease-in;
    transform: translateY(-100%);
  }

  /* @media (max-width: 1020px) {
    .opened {
      transition: all 200ms ease-in;
    }
    .closed {
      transition: all 300ms ease-in;
      transform: translateX(-100%);
    }
  } */
`
export const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  height: fit-content;
  max-width: 100%;
  background: var(--background1-main);
  box-shadow: inset 20px 20px 40px #171718, inset -20px -20px 40px #252526;
  z-index: 22;
  @media (max-width: 1020px) {
    justify-content: start;
    padding-left: 1rem;
    padding-right: 1rem;
    max-width: fit-content;
    transform: translateX(-100%);
    transition: all 200ms ease-in;
    &.true {
      transition: all 300ms ease-in;
      transform: translateX(100%);
    }
  }
`
export const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 0;
  @media (max-width: 1020px) {
    flex-direction: column;
  }
`
export const ListItem = styled.li`
  margin-right: 1rem;
  font-size: 1.75rem;
  font-weight: 500;

  @media (max-width: 740px) {
    font-size: 1rem;
    margin-right: 0.25rem;
  }
`
