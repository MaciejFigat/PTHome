import styled from 'styled-components'

export const TransitionWrapperMain = styled.div`
  position: sticky;
  top: 0;
  .active {
    transition: all 200ms ease-in;
  }
  .hidden {
    transition: all 300ms ease-in;
    transform: translateY(-130%);
  }
`
export const TransitionWrapper = styled.div`
  position: sticky;
  top: 0;
  min-width: 100vw;
  max-height: 3.2rem;
  z-index: 9999;
  background: var(--background1-main);
`
export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  position: sticky;
  top: 0;
  height: fit-content;
  max-width: 100%;
  background: var(--background1-main);
  box-shadow: inset 20px 20px 40px #171718, inset -20px -20px 40px #252526;
  z-index: -1;
  @media (max-width: 1020px) {
    flex-direction: column;
    justify-content: center;
    max-width: fit-content;
    transform: translateX(-130%);
    min-width: 100vw;
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
  justify-content: space-evenly;
  padding: 0;
  min-width: 50vw;
  @media (max-width: 1020px) {
    flex-direction: column;
  }
`

export const ListItem = styled.li`
  margin-right: 1rem;
  font-size: 1.15rem;
  font-weight: 600;
  display: flex;
  text-transform: uppercase;
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

export const ListItemMobile = styled.li`
  font-weight: 500;
  display: none;
  font-size: 1.25rem;
  margin-right: 0.25rem;
  color: var(--background5-main);
  margin: 0;
  flex-direction: column;
  padding: 0.5rem;
  @media (max-width: 1020px) {
    align-items: center;
    display: flex;
  }
`

export const MobileViewContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 2rem 0 1rem;
`
export const HeaderTitleMobile = styled.h1`
  color: var(--background5-main);
  font-size: 1.75rem;
  font-weight: 400;
  display: none;
  max-width: fit-content;
  @media (max-width: 1020px) {
    display: block;
    font-size: 1.25rem;
  }
`
export const HeaderTitleDesktop = styled.h1`
  color: var(--background4-main);
  font-size: 1.25rem;
  font-weight: 200;
  margin: 0;
  display: flex;
  align-items: center;
  transition: all 200ms ease-in;
  &.show {
    transition: all 200ms ease-in;
    opacity: 100%;
  }
  &.hide {
    transition: all 300ms ease-in;
    opacity: 0;
  }
  @media (max-width: 1020px) {
    display: none;
  }
`
