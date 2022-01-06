import React from 'react'
import {
  NavList,
  ListItem,
  ListItemMobile,
  AnimatedWrapperMobile,
} from './nav.styled'
import { NavLink } from 'react-router-dom'
import SocialIcons from '../../SvgIcon/SocialIcons'
import { AnimatePresence, motion } from 'framer-motion'
interface NavListMobileProps {
  open: boolean
}

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
}
const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.15,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
}

const links = [
  { name: 'Home', to: '/', id: '1' },
  { name: 'Blog', to: '/blog', id: '2' },
  { name: 'Ćwiczenia', to: '/exercise', id: '3' },
  { name: 'Shop', to: '/shop', id: '4' },
  { name: 'Kontakt', to: '/contact', id: '5' },
]

const NavListMobile: React.FC<NavListMobileProps> = ({ open }) => {
  return (
    <AnimatePresence>
      {open && (
        <AnimatedWrapperMobile
          initial={{ width: 0 }}
          animate={{
            width: '100vw',
          }}
          exit={{
            width: 0,
            transition: { delay: 0.7, duration: 0.3 },
          }}
        >
          <motion.div
            initial='closed'
            animate='open'
            exit='closed'
            variants={sideVariants}
          >
            <NavList>
              {links.map(({ name, to, id }) => (
                <ListItem key={id}>
                  {' '}
                  <motion.div
                    whileHover={{ scale: 1.075 }}
                    variants={itemVariants}
                  >
                    <NavLink
                      to={to}
                      className={(navData) =>
                        'nav_link' + (navData.isActive ? ' activated' : '')
                      }
                    >
                      {' '}
                      {name}
                    </NavLink>
                  </motion.div>
                </ListItem>
              ))}

              <ListItemMobile>
                <SocialIcons variant='light' />
              </ListItemMobile>
            </NavList>
          </motion.div>
        </AnimatedWrapperMobile>
      )}
    </AnimatePresence>
  )
}
export default NavListMobile
