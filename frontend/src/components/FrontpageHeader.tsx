import React from 'react'
import {
  HeaderContainer,
  HeaderTitle,
  HeaderList,
  HeaderItem,
} from '../styles/frontPageHeader'
import ContactIcons from './ContactIcons'

interface FrontpageHeaderProps {}

const FrontpageHeader: React.FC<FrontpageHeaderProps> = ({}) => {
  return (
    <HeaderContainer>
      <HeaderList>
        <HeaderItem>
          <HeaderTitle>Nina K. trener personalny</HeaderTitle>
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
