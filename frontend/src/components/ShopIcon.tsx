import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconsItem, IconsWrapper } from '../styles/contactIcons'
import { faCat } from '@fortawesome/free-solid-svg-icons'
interface ShopIconProps {}

const ShopIcon: React.FC<ShopIconProps> = () => {
  return (
    <IconsWrapper>
      <IconsItem>
        <FontAwesomeIcon icon={faCat} />
      </IconsItem>
    </IconsWrapper>
  )
}
export default ShopIcon
