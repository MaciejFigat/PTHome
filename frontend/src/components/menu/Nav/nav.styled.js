import styled from 'styled-components'
import { motion } from 'framer-motion'

export const TransitionWrapperMain = styled.div`
  position: sticky;
  z-index: 3;
  top: -2px;
  background: transparent;
  transition: color 1200ms ease-out;
  /* transition: background 1200ms ease-out; */
  .nav_link {
    transition: color 600ms ease-out;
    color: var(--background-main5);
  }
  .top {
    /* this is for the username of logged user */
    h1 {
      color: var(--bluegreen5);
    }
    /* li is for login/logout icons in navbar */
    li {
      color: var(--bluegreen5);
    }
    /* additional className for burger so it changes color with scroll */
    .burger {
      background: var(--bluegreen5);
    }
    transition: color 1200ms ease-out;
    transition: background 1200ms ease-out;
    background: transparent;
    .nav_link {
      color: var(--bluegreen5);
    }
  }
  .active {
    .burger {
      background: var(--bluegreen3);
    }
    /* li is for login/logout icons in navbar */
    li {
      color: var(--bluegreen3);
    }
    transition: all 200ms ease-in;
    /* transition: color 1200ms ease-out; */
    /* transition: background 1200ms ease-out; */
    background: var(--bluegreen5);
  }
  .hidden {
    .burger {
      background: var(--bluegreen5);
    }
    /* this is for the username of logged user */
    h1 {
      color: var(--bluegreen5);
    }
    /* li is for login/logout icons in navbar */
    li {
      color: var(--bluegreen5);
    }
    transition: all 200ms ease-in;
    transform: translateY(-130%);
    color: var(--background-main5);
  }
`
export const TransitionWrapper = styled.div`
  position: sticky;
  top: 0;
  max-height: 3.2rem;
  height: 55px;
  /* background: var(--bluegreen5); */
  /* z-index: -3; */
  @media (max-width: 1020px) {
  }
`
export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  position: sticky;
  top: 0;
  min-height: fit-content;
  overflow: hidden;

  @media (max-width: 1020px) {
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: 100%;
    box-shadow: none;
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
    min-width: fit-content;
    padding-bottom: 3rem;
    gap: 1.75rem;
    /* @media screen and (orientation: landscape) { */
  }
  @media (max-width: 700px) and (orientation: landscape) {
    margin-top: 1rem;
    padding-bottom: 1.75rem;
    gap: 0.75rem;
  }
  @media (max-width: 400px) {
    margin-top: 0rem;
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
  font-size: 1.05rem;

  letter-spacing: 0.075em;
  font-weight: 400;
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
    /* @media screen and (orientation: landscape) { */
    @media (max-width: 700px) and (orientation: landscape) {
      font-size: 1.55rem;
    }
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
  color: var(--bluegreen3);
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
  font-size: 1.25rem;
  font-weight: 200;
  margin: 0;
  display: flex;
  align-items: center;
  transition: all 200ms ease-in;
  &.show {
    transition: all 200ms ease-in;
    /* opacity: 100%; */
    color: var(--bluegreen3);
  }
  &.hide {
    transition: all 300ms ease-in;
    /* opacity: 0; */
    color: var(--bluegreen5);
  }
  @media (max-width: 1020px) {
    display: none;
  }
`
export const AnimatedWrapperMobile = styled(motion.div)`
  background: var(--bluegreen4);
  width: 18.75rem;
  height: calc(100vh + 50px);
  display: none;
  @media (max-width: 1020px) {
    display: flex;
  }
`
export const NavListDesktopWrapper = styled.div`
  display: flex;
  @media (max-width: 1020px) {
    display: none;
  }
`
