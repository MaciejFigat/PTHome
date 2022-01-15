import styled from 'styled-components'

export const BurgerWrapper = styled.div`
  /* max-width: fit-content; */
  /* height: 100%; */

  /* display: flex;
  align-items: center; */
`

export const BurgerContainer = styled.div`
  display: none;
  @media (max-width: 1020px) {
    display: flex;
    min-height: 50px;
    align-items: baseline;
  }
`

export const BurgerLine = styled.div`
  border-radius: 6%;
  /* background: var(--bluegreen3); */
  margin: 5px;
  align-self: center;
  transition: all 0.3s ease;

  /* &:hover {
    background: var(--background4-main);
  } */
  &.lineFour {
    width: 8px;
    height: 22px;
    margin: 0px;
    display: none;
    border-radius: 12%;
    &.true {
      display: block;
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
`
