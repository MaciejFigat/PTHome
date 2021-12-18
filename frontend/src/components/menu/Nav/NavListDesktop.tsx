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
          to='/'
          className={(navData) =>
            'nav_link' + (navData.isActive ? ' activated' : '')
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
          className={(navData) =>
            'nav_link' + (navData.isActive ? ' activated' : '')
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
          className={(navData) =>
            'nav_link' + (navData.isActive ? ' activated' : '')
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
          className={(navData) =>
            'nav_link' + (navData.isActive ? ' activated' : '')
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
          className={(navData) =>
            'nav_link' + (navData.isActive ? ' activated' : '')
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
