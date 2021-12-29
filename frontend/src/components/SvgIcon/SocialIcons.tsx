import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagram,
  faTelegram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { IconsItem, IconsWrapper, IconsItemDiv } from './SocialIcons.styled'
interface SocialIconsProps {}

const SocialIcons: React.FC<SocialIconsProps> = () => {
  return (
    <>
      <IconsWrapper>
        <IconsItemDiv>
          <IconsItem>
            <a
              href='https://www.instagram.com/ninaolgakirylowicz/'
              aria-label='telegram'
            >
              {' '}
              <FontAwesomeIcon icon={faTelegram} />
            </a>
          </IconsItem>
        </IconsItemDiv>
        <IconsItemDiv>
          <IconsItem>
            <a
              href='https://www.instagram.com/ninaolgakirylowicz/'
              aria-label='twitter'
            >
              {' '}
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </IconsItem>
        </IconsItemDiv>{' '}
        <IconsItemDiv>
          <IconsItem>
            <a
              href='https://www.instagram.com/ninaolgakirylowicz/'
              aria-label='instagram'
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </IconsItem>
        </IconsItemDiv>
        <IconsItemDiv>
          <IconsItem>
            <a
              href='https://www.facebook.com/profile.php?id=100044161188998'
              aria-label='facebook'
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </IconsItem>
        </IconsItemDiv>
      </IconsWrapper>
    </>
  )
}
export default SocialIcons
