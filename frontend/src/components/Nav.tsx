import { useEffect, useState } from 'react'
import { NavHashLink } from 'react-router-hash-link'
import {
  TransitionWrapper,
  NavContainer,
  NavList,
  ListItem,
} from '../styles/nav'

import useScrollListener from '../hooks/useScrollListener'
interface NavProps {}

const Nav: React.FC<NavProps> = () => {
  const [scrollDirection, setScrollDirection] = useState<
    'up' | 'down' | undefined | null
  >()
  const scroll = useScrollListener()

  // on scroll I update scrollDirection
  useEffect(() => {
    if (scroll.y > 250 && scroll.y - scroll.lastY > 0)
      setScrollDirection('down')
    else {
      setScrollDirection('up')
    }
  }, [scroll.y, scroll.lastY])

  return (
    <TransitionWrapper>
      <NavContainer
        className={
          scrollDirection === 'up' || null || undefined ? 'active' : 'hidden'
        }
      >
        <NavList>
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
          <ListItem> </ListItem>
        </NavList>
      </NavContainer>
    </TransitionWrapper>
  )
}
export default Nav
