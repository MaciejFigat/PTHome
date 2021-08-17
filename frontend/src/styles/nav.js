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

  @media (max-width: 1020px) {
    .active {
      transition: all 200ms ease-in;
    }
    .hidden {
      transition: all 300ms ease-in;
      transform: translateX(-100%);
    }
  }
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
    /* justify-content: start; */
    justify-content: center;
    padding-left: 1rem;
    padding-right: 1rem;
    max-width: fit-content;
    transform: translateX(-100%);
    /* min-width: 20vw; */
    min-width: 300px;
    transition: all 200ms ease-in;
    &.true {
      transition: all 300ms ease-in;
      transform: translateX(0%);
    }
  }
`
// the following list is used for desktop navigation
export const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 0;
  @media (max-width: 1020px) {
    /* flex-direction: column; */
    display: none;
  }
`
// the following list is used for mobile devices
export const NavListSmall = styled.ul`
  display: none;
  list-style: none;
  flex-direction: column;
  justify-content: center;
  padding: 0;
  @media (max-width: 1020px) {
    display: flex;
  }
`
export const ListItem = styled.li`
  margin-right: 1rem;
  font-size: 1.75rem;
  font-weight: 500;
  display: flex;

  color: var(--background5-main);
  @media (max-width: 1020px) {
    flex-direction: column;
    align-items: center;
    font-size: 1.25rem;
    margin-right: 0.25rem;
    padding: 0.5rem;
    margin: 0;
  }
`
