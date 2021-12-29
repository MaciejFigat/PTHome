import React from 'react'
import { NavList, ListItem, ListItemMobile } from './nav.styled'
import { NavLink } from 'react-router-dom'
import SocialIcons from '../../SvgIcon/SocialIcons'
import HeaderSvg from '../FrontPageHeader/HeaderSvg'

interface NavListMobileProps {}

const NavListDesktop: React.FC<NavListMobileProps> = () => {
  return (
    <NavList>
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

      <ListItemMobile>
        <HeaderSvg version='handstand' />
        <SocialIcons />
      </ListItemMobile>
    </NavList>
  )
}
export default NavListDesktop
