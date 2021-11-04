import React from 'react'
import {
  BurgerIcon,
  Checkbox,
  LineOne,
  LineTwo,
  LineContainer,
} from '../../styles/BurgerSecondary'
interface BurgerSecondaryProps {}

const BurgerSecondary: React.FC<BurgerSecondaryProps> = () => {
  return (
    <BurgerIcon>
      <Checkbox type='checkbox' />
      <LineContainer>
        <LineOne>1</LineOne>
        <LineTwo>2</LineTwo>
      </LineContainer>
    </BurgerIcon>
  )
}
export default BurgerSecondary
