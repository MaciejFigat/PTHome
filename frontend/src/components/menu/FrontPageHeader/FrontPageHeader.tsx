import React from 'react'
import {
  HeaderContainer,
  HeaderTitle,
  HeaderList,
  HeaderItem,
} from './frontPageHeader.styled'
import ContactIcons from '../../SvgIcon/ContactIcons'
import HeaderSvg from '../../HeaderSvg'

interface FrontPageHeaderProps {
  title: string
}

const FrontPageHeader: React.FC<FrontPageHeaderProps> = ({ title }) => {
  return (
    <HeaderContainer>
      <HeaderList>
        <HeaderItem>
          <HeaderSvg />{' '}
        </HeaderItem>
        <HeaderItem>
          <HeaderTitle>{title}</HeaderTitle>
        </HeaderItem>
        <HeaderItem>
          {' '}
          <ContactIcons />
        </HeaderItem>
      </HeaderList>
    </HeaderContainer>
  )
}
export default FrontPageHeader
