import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookF,
  faInstagram,
  faTelegramPlane,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { IconsItem, IconsWrapper, IconsItemDiv } from './SocialIcons.styled'
import { motion } from 'framer-motion'
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
  },
  open: {
    y: 0,
    opacity: 1,
  },
}

const SocialIcons: React.FC<SocialIconsProps> = ({ variant }) => {
  return (
    <StaggerChildrenWrapper>
      <IconsWrapper>
        {icons.map(({ href, ariaLabel, id, icon }) => (
          <motion.div
            whileHover={{ scale: 1.075 }}
            variants={itemVariants}
            key={id}
          >
            <IconsItemDiv variant={variant}>
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
