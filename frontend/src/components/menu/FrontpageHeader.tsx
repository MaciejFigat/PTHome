import React from 'react'
import {
  HeaderContainer,
  HeaderTitle,
  HeaderList,
  HeaderItem,
} from '../../styles/frontPageHeader'
import ContactIcons from '../ContactIcons'
import HeaderSvg from '../HeaderSvg'

interface FrontpageHeaderProps {
  title: string
}

const FrontpageHeader: React.FC<FrontpageHeaderProps> = ({ title }) => {
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
export default FrontpageHeader
