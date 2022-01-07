import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookF,
  faInstagram,
  faTelegramPlane,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { IconsItem, IconsWrapper, IconsItemDiv } from './SocialIcons.styled'
import { AnimatePresence, motion } from 'framer-motion'
import DropAnimationWrapper from '../AnimationWrappers/DropAnimationWrapper'
import StaggerChildrenWrapper from '../AnimationWrappers/StaggerChildrenWrapper'
interface SocialIconsProps {
  variant?: string | 'light'
}

const icons = [
  {
    href: 'https://www.instagram.com/ninaolgakirylowicz/',
    icon: faTelegramPlane,
    id: '1',
    ariaLabel: 'telegram',
  },
  {
    href: 'https://www.instagram.com/ninaolgakirylowicz/',
    icon: faTwitter,
    id: '2',
    ariaLabel: 'twitter',
  },
  {
    href: 'https://www.instagram.com/ninaolgakirylowicz/',
    icon: faInstagram,
    id: '3',
    ariaLabel: 'instagram',
  },
  {
    href: 'https://www.instagram.com/ninaolgakirylowicz/',
    icon: faFacebookF,
    id: '4',
    ariaLabel: 'facebook',
  },
]
const itemVariants = {
  closed: {
    y: 50,
    opacity: 0,
    // transition: {
    //   delay: 0.3,
    //   duration: 0.9,
    //   damping: 20,
    // },
  },
  open: {
    y: 0,
    opacity: 1,
    // transition: {
    //   delay: 0.3,
    //   duration: 0.9,
    //   damping: 20,
    // },
  },
}

const SocialIcons: React.FC<SocialIconsProps> = ({ variant }) => {
  return (
    <StaggerChildrenWrapper>
      <IconsWrapper>
        {icons.map(({ href, ariaLabel, id, icon }) => (
          <motion.div whileHover={{ scale: 1.075 }} variants={itemVariants}>
            <IconsItemDiv key={id}>
              <IconsItem variant={variant}>
                <a href={href} aria-label={ariaLabel}>
                  {' '}
                  <FontAwesomeIcon icon={icon} />
                </a>
              </IconsItem>
            </IconsItemDiv>
          </motion.div>
        ))}
      </IconsWrapper>
    </StaggerChildrenWrapper>
  )
}
export default SocialIcons
