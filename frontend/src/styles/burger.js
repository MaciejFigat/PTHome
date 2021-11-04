import styled from 'styled-components'

export const BurgerWrapper = styled.div`
  /* max-width: fit-content; */
  /* height: 100%; */

  /* display: flex;
  align-items: center; */
`
// export const BurgerContainer = styled.div`
//   display: none;
//   @media (max-width: 1020px) {
//     padding: 0.5rem;
//     display: block;
//   }
// `
export const BurgerContainer = styled.div`
  display: none;
  @media (max-width: 1020px) {
    /* padding-top: 0.4rem; */
    display: flex;
    min-height: 50px;
    align-items: baseline;
    /* align-items: center; */
  }
`

export const BurgerLine = styled.div`
  border-radius: 6%;
  background: var(--background5-main);
  margin: 5px;
  align-self: center;
  transition: all 0.3s ease;
  &.lineFour {
    width: 8px;
    height: 22px;
    margin: 0px;
    display: none;
    &.true {
      display: block;
      border-radius: 9%;
    }
  }
  &.lineOne {
    width: 10px;
    height: 26px;
    margin: 2px;
    &.true {
      border-radius: 9%;
    }
  }
  &.lineTwo {
    width: 8px;
    height: 26px;
    margin: 2px;
    transform: rotate(-19deg);
    &.true {
      transform: rotate(-90deg);
      width: 4px;
      height: 42px;
      margin: 3px;
    }
  }
  &.lineThree {
    width: 6px;
    height: 26px;
    margin: 2px;
    transform: rotate(-19deg);
    transform-origin: bottom;
    &.true {
      width: 10px;
      height: 26px;
      margin: 2px;
      transform: rotate(0deg);
      border-radius: 9%;
    }
  }

  /*
  &.lineThree:hover {
    width: 28px;
    width: 12px;
  } */
`
