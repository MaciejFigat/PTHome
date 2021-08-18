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
// import { HeaderTitleMobile } from '../../styles/frontPageHeader'
import NavListDesktop from './NavListDesktop'

import useScrollListener from '../../hooks/useScrollListener'
import ShopIcon from '../ShopIcon'
interface NavProps {}

const Nav: React.FC<NavProps> = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const handleClickMenu = () => {
    setMenuOpen(!menuOpen)
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
    if (scroll.y === 0) setScrollTop(true)
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
          <HeaderTitleMobile>Nina K.</HeaderTitleMobile>
        </MobileViewContainer>
        <NavContainer className={menuOpen}>
          <HeaderTitleDesktop className={scrollTop === true ? 'hide' : 'show'}>
            Nina K.
          </HeaderTitleDesktop>
          <NavListDesktop />

          <ShopIcon />
        </NavContainer>
      </TransitionWrapper>
    </TransitionWrapperMain>
  )
}
export default Nav
