import styled from 'styled-components'

export const TransitionWrapperMain = styled.div`
  position: sticky;
  z-index: 3;
  top: -2px;
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
  max-height: 3.2rem;
  background: var(--background1-main);
`
export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  /* max-width: 50%; */
  position: sticky;
  top: 0;
  height: fit-content;
  /* max-width: 100vw; */
  background: var(--background1-main);
  box-shadow: inset 20px 20px 40px #171718, inset -20px -20px 40px #252526;

  @media (max-width: 1020px) {
    flex-direction: column;
    justify-content: center;
    max-width: 100%;
    transform: translateX(-130%);
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
  justify-content: space-around;
  padding: 0;
  min-width: 50vw;
  @media (max-width: 1020px) {
    width: 100%;
    position: sticky;
    top: 0;
    height: calc(100vh - 50px);
    flex-direction: column;
    justify-content: center;
    min-height: 85vh;
    max-width: 50vw;
    padding-bottom: 3rem;
    gap: 1.75rem;
  }
`
export const ListLoginWrapper = styled.div`
  @media (max-width: 1020px) {
    display: none;
  }
`
export const HeaderLoginWrapper = styled.div`
  display: flex;
  gap: 2rem;
  @media (min-width: 1020px) {
    display: none;
  }
`

export const ListItem = styled.li`
  margin-right: 1rem;
  font-size: 1.25rem;
  font-weight: 600;
  display: flex;
  text-transform: uppercase;
  color: var(--background5-main);
  @media (max-width: 1020px) {
    flex-direction: column;
    align-content: flex-start;
    font-size: 2.55rem;
    margin-right: 0.25rem;
    margin-left: 1.25rem;
    font-weight: 800;
  }
`

export const ListItemMobile = styled.div`
  font-weight: 500;
  display: none;
  font-size: 1.25rem;
  margin-right: 0.25rem;
  color: var(--background5-main);
  margin: 0;
  flex-direction: column;
  gap: 2rem;
  padding: 0.5rem;
  @media (max-width: 1020px) {
    align-items: left;
    display: flex;
    margin-left: 0.5rem;
  }
`

export const MobileViewContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 1.5rem 0 1rem;
  /* this below fixes the irritating gap in nav when you scroll it down */
  margin-top: -1px !important;
`
export const HeaderTitleMobile = styled.h1`
  color: var(--background2-main);
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
