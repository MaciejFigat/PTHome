import styled from 'styled-components'

export const BurgerWrapper = styled.div`
  max-width: fit-content;
`
export const BurgerContainer = styled.div`
  display: none;
  @media (max-width: 1020px) {
    padding: 0.5rem;
    display: block;
  }
`
export const BurgerLine = styled.div`
  width: 25px;
  height: 4px;
  border-radius: 25%;
  background: var(--background5-main);
  margin: 5px;
  transition: all 0.3s ease;
  &.lineOne.true {
    height: 4.5px;
    transform: rotate(-45deg) translate(-4.95px, -2.75px);
  }
  &.lineTwo.true {
    opacity: 0;
  }
  &.lineThree.true {
    height: 4.5px;
    transform: rotate(45deg) translate(-4.95px, 2.75px);
  }
`
