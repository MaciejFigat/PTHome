import React from 'react'
import { NavList, ListItem, ListItemMobile } from './nav.styled'
import { NavLink } from 'react-router-dom'
import ContactIcons from '../SvgIcon/ContactIcons'

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
        <NavLink
          exact
          to='/home'
          className='nav_link'
          activeClassName='nav_link_active'
        >
          {' '}
          Home
        </NavLink>
      </ListItem>
      <ListItem>
        {' '}
        <NavLink
          exact
          to='/blog'
          className='nav_link'
          activeClassName='nav_link_active'
        >
          {' '}
          Blog
        </NavLink>
      </ListItem>
      <ListItem>
        {' '}
        <NavLink
          exact
          to='/exercise'
          className='nav_link'
          activeClassName='nav_link_active'
        >
          {' '}
          Ćwiczenia
        </NavLink>
      </ListItem>
      <ListItem>
        {' '}
        <NavLink
          exact
          to='/shop'
          className='nav_link'
          activeClassName='nav_link_active'
        >
          {' '}
          Shop
        </NavLink>
      </ListItem>
      <ListItem>
        {' '}
        <NavLink
          exact
          to='/contact'
          className='nav_link'
          activeClassName='nav_link_active'
        >
          {' '}
          Kontakt
        </NavLink>
      </ListItem>
    </NavList>
  )
}
export default NavListDesktop
