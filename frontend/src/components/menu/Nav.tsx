import { useEffect, useState } from 'react'
import Burger from './Burger'
import {
  TransitionWrapperMain,
  TransitionWrapper,
  NavContainer,
  MobileViewContainer,
  HeaderTitleMobile,
  HeaderTitleDesktop,
} from '../../styles/nav'
import { NavLink } from 'react-router-dom'

import NavListDesktop from './NavListDesktop'

import useScrollListener from '../../hooks/useScrollListener'
import SvgIcon from '../SvgIcon'
interface NavProps {}

const Nav: React.FC<NavProps> = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const handleClickMenu = () => {
    setMenuOpen(!menuOpen)
  }
  const handleCloseMenu = () => {
    if (menuOpen === true) {
      setMenuOpen(false)
    }
  }

  const [scrollDirection, setScrollDirection] = useState<
    'up' | 'down' | undefined | null
  >()
  const [scrollTop, setScrollTop] = useState<boolean>(true)
  const scroll = useScrollListener()

  // on scroll I update scrollDirection
  useEffect(() => {
    if (scroll.y > 250 && scroll.y - scroll.lastY > 0)
      setScrollDirection('down')
    else {
      setScrollDirection('up')
    }
    if (scroll.y <= 300) setScrollTop(true)
    else {
      setScrollTop(false)
    }
  }, [scroll.y, scroll.lastY])

  return (
    <TransitionWrapperMain>
      <TransitionWrapper
        className={
          scrollDirection === 'up' || null || undefined ? 'active' : 'hidden'
        }
      >
        <MobileViewContainer>
          <div onClick={handleClickMenu}>
            <Burger menuOpen={menuOpen} />{' '}
          </div>{' '}
          <HeaderTitleMobile>G. Brzęczyszczykiewicz</HeaderTitleMobile>
        </MobileViewContainer>
        <NavContainer className={menuOpen} onClick={handleCloseMenu}>
          <HeaderTitleDesktop className={scrollTop === true ? 'hide' : 'show'}>
            George Brzęczyszczykiewicz
          </HeaderTitleDesktop>
          <NavListDesktop />

          <NavLink
            exact
            to='/login'
            className='nav_link'
            activeClassName='nav_link_active'
          >
            {' '}
            <SvgIcon variant='login' />
          </NavLink>
        </NavContainer>
      </TransitionWrapper>
    </TransitionWrapperMain>
  )
}
export default Nav
