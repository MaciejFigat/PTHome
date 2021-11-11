import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconsItem, IconsWrapper } from './iconsSvg.styled'
import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
interface SvgIconProps {
  variant: 'login' | 'logout'
}

const SvgIcon: React.FC<SvgIconProps> = ({ variant }) => {
  return (
    <IconsWrapper>
      <IconsItem>
        {variant === 'login' ? (
          <FontAwesomeIcon icon={faSignInAlt} />
        ) : (
          <FontAwesomeIcon icon={faSignOutAlt} />
        )}
      </IconsItem>
    </IconsWrapper>
  )
}
export default SvgIcon
