import React from 'react'
import { NavHashLink } from 'react-router-hash-link'
import { NavContainer, NavList, ListItem } from '../styles/nav'
import ContactIcons from './ContactIcons'
interface NavProps {}

const Nav: React.FC<NavProps> = () => {
  return (
    <NavContainer>
      <NavList>
        <ListItem>
          {' '}
          <NavHashLink
            smooth
            to='/home/#home'
            activeClassName='selected'
            activeStyle={{ fontWeight: 'bold', color: 'lightcoral' }}
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
            activeStyle={{ fontWeight: 'bold', color: 'lightcoral' }}
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
            activeStyle={{ fontWeight: 'bold', color: 'lightcoral' }}
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
            activeStyle={{ fontWeight: 'bold', color: 'lightcoral' }}
          >
            Blog
          </NavHashLink>
        </ListItem>
        <ListItem> </ListItem>
        <ListItem>
          <ContactIcons />
        </ListItem>
      </NavList>
    </NavContainer>
  )
}
export default Nav
