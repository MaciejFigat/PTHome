import { useEffect, useState } from 'react'
import Burger from '../Burger/Burger'
import {
  TransitionWrapperMain,
  TransitionWrapper,
  NavContainer,
  MobileViewContainer,
  HeaderTitleMobile,
  HeaderTitleDesktop,
} from './nav.styled'
import { NavLink } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../app/reduxHooks'
import NavListDesktop from './NavListDesktop'
import useScrollListener from '../../../hooks/useScrollListener'
import SvgIcon from '../../SvgIcon/SvgIcon'
import { logout } from '../../../features/users/userSlice'

interface NavProps {}
interface UserInfo {
  id?: string
  name?: string
  email?: string
  isAdmin?: boolean
  token?: string
  loading?: boolean
}
const Nav: React.FC<NavProps> = () => {
  const dispatch = useAppDispatch()

  const userInfo: UserInfo = useAppSelector((state) => state.user.userInfo)
  const { id, name } = userInfo

  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const handleClickMenu = () => {
    setMenuOpen(!menuOpen)
  }
  const handleCloseMenu = () => {
    if (menuOpen === true) {
      setMenuOpen(false)
    }
  }

  const logoutHandler = (e: any) => {
    e.preventDefault()
    dispatch(logout())
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
            <Burger menuOpen={menuOpen} />
          </div>{' '}
          <HeaderTitleMobile>
            {name ? `Witaj ${name}!` : `Witaj!`}
          </HeaderTitleMobile>
          {/* {id ? (
            <NavLink
              exact
              to='/'
              onClick={logoutHandler}
              className='nav_link'
              activeClassName='nav_link_active'
            >
              {' '}
              <SvgIcon variant='logout' />
            </NavLink>
          ) : (
            <NavLink
              exact
              to='/login'
              className='nav_link'
              activeClassName='nav_link_active'
            >
              {' '}
              <SvgIcon variant='login' />
            </NavLink>
          )} */}
        </MobileViewContainer>
        <NavContainer className={menuOpen} onClick={handleCloseMenu}>
          <HeaderTitleDesktop className={scrollTop === true ? 'hide' : 'show'}>
            {name ? `Witaj ${name}!` : `Witaj!`}
          </HeaderTitleDesktop>
          <NavListDesktop />
          {id ? (
            <NavLink
              exact
              to='/'
              onClick={logoutHandler}
              className='nav_link'
              activeClassName='nav_link_active'
            >
              {' '}
              <SvgIcon variant='logout' />
            </NavLink>
          ) : (
            <NavLink
              exact
              to='/login'
              className='nav_link'
              activeClassName='nav_link_active'
            >
              {' '}
              <SvgIcon variant='login' />
            </NavLink>
          )}
        </NavContainer>
      </TransitionWrapper>
    </TransitionWrapperMain>
  )
}
export default Nav
