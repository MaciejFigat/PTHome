import React from 'react'
import { NavList, ListItem, ListItemMobile } from './nav.styled'
import { NavLink } from 'react-router-dom'
import ContactIcons from '../../SvgIcon/ContactIcons'

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
          to='/home'
          className={({ isActive }) =>
            'nav_link' + (isActive ? ' activated' : '')
          }
        >
          {' '}
          Home
        </NavLink>
      </ListItem>
      <ListItem>
        {' '}
        <NavLink
          to='/blog'
          className={({ isActive }) =>
            'nav_link' + (isActive ? ' activated' : '')
          }
        >
          {' '}
          Blog
        </NavLink>
      </ListItem>
      <ListItem>
        {' '}
        <NavLink
          to='/exercise'
          className={({ isActive }) =>
            'nav_link' + (isActive ? ' activated' : '')
          }
        >
          {' '}
          Ćwiczenia
        </NavLink>
      </ListItem>
      <ListItem>
        {' '}
        <NavLink
          to='/shop'
          className={({ isActive }) =>
            'nav_link' + (isActive ? ' activated' : '')
          }
        >
          {' '}
          Shop
        </NavLink>
      </ListItem>
      <ListItem>
        {' '}
        <NavLink
          to='/contact'
          className={({ isActive }) =>
            'nav_link' + (isActive ? ' activated' : '')
          }
        >
          {' '}
          Kontakt
        </NavLink>
      </ListItem>
    </NavList>
  )
}
export default NavListDesktop
