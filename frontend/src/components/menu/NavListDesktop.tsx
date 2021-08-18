import React from 'react'
import { NavList, ListItem, ListItemMobile } from '../../styles/nav'
import { NavHashLink } from 'react-router-hash-link'
import ContactIcons from '../ContactIcons'

interface NavListMobileProps {}

const NavListDesktop: React.FC<NavListMobileProps> = () => {
  return (
    <NavList>
      <ListItemMobile>
        {' '}
        <b>Trener personalny</b>
      </ListItemMobile>
      <ListItemMobile>
        {' '}
        <ContactIcons />
      </ListItemMobile>
      <ListItem>
        {' '}
        <NavHashLink
          smooth
          to='/home/#home'
          activeClassName='selected'
          activeStyle={{ color: '#A2A1A6' }}
        >
          O mnie
        </NavHashLink>
      </ListItem>
      <ListItem>
        {' '}
        <NavHashLink
          smooth
          to='/home/#fitness'
          activeClassName='selected'
          activeStyle={{ color: '#A2A1A6' }}
        >
          Usługi
        </NavHashLink>
      </ListItem>
      <ListItem>
        {' '}
        <NavHashLink
          smooth
          to='/home/#plans'
          activeClassName='selected'
          activeStyle={{ color: '#A2A1A6' }}
        >
          Exe
        </NavHashLink>
      </ListItem>
      <ListItem>
        {' '}
        <NavHashLink
          smooth
          to='/home/#training'
          activeClassName='selected'
          activeStyle={{ color: '#CBC9CF' }}
        >
          Blog
        </NavHashLink>
      </ListItem>
    </NavList>
  )
}
export default NavListDesktop
