import React from 'react'
import { BurgerWrapper, BurgerContainer, BurgerLine } from './burger.styled'
interface BurgerProps {
  menuOpen: boolean
}

const Burger: React.FC<BurgerProps> = ({ menuOpen }) => {
  return (
    <BurgerWrapper className={`toggle ${menuOpen}`}>
      <BurgerContainer>
        <BurgerLine className={`lineFour ${menuOpen}`}></BurgerLine>
        <BurgerLine className={`lineOne ${menuOpen}`}></BurgerLine>
        <BurgerLine className={`lineTwo ${menuOpen}`}></BurgerLine>
        <BurgerLine className={`lineThree ${menuOpen}`}></BurgerLine>
        <BurgerLine className={`lineFour ${menuOpen}`}></BurgerLine>
      </BurgerContainer>
    </BurgerWrapper>
  )
}
export default Burger