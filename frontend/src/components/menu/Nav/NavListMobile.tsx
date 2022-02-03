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
import AnimatedOverlay from '../../AnimatedBubble/AnimatedOverlay'
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
      staggerChildren: 0.07,
      delayChildren: 0.2,
      staggerDirection: 1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: 1,
      delayChildren: 0.2,
    },
  },
}

const links = [
  { name: 'Home', to: '/', id: '1' },
  { name: 'O mnie', to: '/shop', id: '2' },
  { name: 'Blog', to: '/blog', id: '3' },
  { name: 'Usługi', to: '/exercise', id: '4' },
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
            {' '}
            <motion.div variants={itemVariants}>
              <AnimatedOverlay />
            </motion.div>
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
                {' '}
                <motion.div variants={itemVariants}>
                  <SocialIcons variant='light' />
                </motion.div>
              </ListItemMobile>
            </NavList>{' '}
          </motion.div>
        </AnimatedWrapperMobile>
      )}
    </AnimatePresence>
  )
}
export default NavListMobile
