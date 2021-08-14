import React from 'react'
import { NavHashLink } from 'react-router-hash-link'
import {
  TransitionWrapper,
  NavContainer,
  NavList,
  ListItem,
} from '../styles/nav'
import useScroll from '../hooks/useScroll'
interface NavProps {}

const Nav: React.FC<NavProps> = () => {
  // const { scrollX, scrollY, scrollDirection } = useScroll()
  const { scrollDirection } = useScroll()
  return (
    <TransitionWrapper
    // className={
    //   scrollDirection === 'down' || null || undefined ? 'active' : 'hidden'
    // }
    // className={scrollDirection === 'up' || null ? 'active' : 'hidden'}
    >
      <NavContainer
        className={
          scrollDirection === 'down' || null || undefined ? 'active' : 'hidden'
        }
      >
        <NavList>
          <ListItem>
            {' '}
            <NavHashLink
              smooth
              to='/home/#home'
              activeClassName='selected'
              activeStyle={{ fontWeight: 'bold', color: '#A2A1A6' }}
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
              activeStyle={{ fontWeight: 'bold', color: '#A2A1A6' }}
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
              activeStyle={{ fontWeight: 'bold', color: '#A2A1A6' }}
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
              activeStyle={{ fontWeight: 'bold', color: '#CBC9CF' }}
            >
              Blog
            </NavHashLink>
          </ListItem>
          <ListItem> </ListItem>
        </NavList>
      </NavContainer>
    </TransitionWrapper>
  )
}
export default Nav
