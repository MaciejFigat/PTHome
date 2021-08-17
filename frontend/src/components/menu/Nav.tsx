import { useEffect, useState } from 'react'
import Burger from './Burger'
import {
  TransitionWrapperMain,
  TransitionWrapper,
  NavContainer,
  MobileViewContainer,
} from '../../styles/nav'
import { HeaderTitleMobile } from '../../styles/frontPageHeader'
import NavListDesktop from './NavListDesktop'
import NavListMobile from './NavListMobile'
import useScrollListener from '../../hooks/useScrollListener'
interface NavProps {}

const Nav: React.FC<NavProps> = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const handleClickMenu = () => {
    setMenuOpen(!menuOpen)
  }
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
          <HeaderTitleMobile>Nina K - trener</HeaderTitleMobile>
        </MobileViewContainer>
        <NavContainer
          className={
            scrollDirection === 'up' || null || undefined
              ? `active ${menuOpen}`
              : `hidden ${menuOpen}`
          }
        >
          <NavListDesktop />
          <NavListMobile />
        </NavContainer>
      </TransitionWrapper>
    </TransitionWrapperMain>
  )
}
export default Nav
