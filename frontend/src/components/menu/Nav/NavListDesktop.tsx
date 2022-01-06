import React from 'react'
import { NavList, ListItem, NavListDesktopWrapper } from './nav.styled'
import { NavLink } from 'react-router-dom'

interface NavListMobileProps {}

const links = [
  { name: 'Home', to: '/', id: '1' },
  { name: 'Blog', to: '/blog', id: '2' },
  { name: 'Ćwiczenia', to: '/exercise', id: '3' },
  { name: 'Shop', to: '/shop', id: '4' },
  { name: 'Kontakt', to: '/contact', id: '5' },
]

const NavListDesktop: React.FC<NavListMobileProps> = () => {
  return (
    <NavListDesktopWrapper>
      <NavList>
        {links.map(({ name, to, id }) => (
          <ListItem key={id}>
            {' '}
            <NavLink
              to={to}
              className={(navData) =>
                'nav_link' + (navData.isActive ? ' activated' : '')
              }
            >
              {' '}
              {name}
            </NavLink>
          </ListItem>
        ))}
      </NavList>
    </NavListDesktopWrapper>
  )
}
export default NavListDesktop
