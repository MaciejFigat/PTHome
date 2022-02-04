import React from 'react'
import {
  BubbleOneBlurry,
  BubbleOneBlurryStatic,
} from '../components/AnimatedBubble/AnimatedBubble.styled'

import FrontScroll from '../components/FrontScroll/FrontScroll'
import {
  FrontSec,
  FrontSecStatic,
} from '../components/FrontSection/FrontSection.styled'
import InfoSection from '../components/InfoSection/InfoSection'

export const dataOne = {
  topline: 'Lorem ipsum dolor sit.',
  headline:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, mollitia?',
  subtitle:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat perspiciatis non deleniti doloremque, iure laudantium quaerat esse odit. Similique nihil voluptate voluptatem sed tempora sunt libero, saepe corrupti laboriosam suscipit.',
}
interface ShopProps {}

const Shop: React.FC<ShopProps> = () => {
  return (
    <>
      <FrontSec>
        <InfoSection data={dataOne} variant='transparent' imgStart>
          <BubbleOneBlurry
            width='19rem'
            height='19rem'
            variant='tertiary'
            opacity='0.32'
            top='39%'
            right='58%'
            animationFloatDuration='28s'
            animationDuration='153s'
          />
        </InfoSection>
      </FrontSec>
      <FrontSecStatic>
        <InfoSection data={dataOne} variant='transparent' imgStart>
          <BubbleOneBlurryStatic
            width='13rem'
            height='13rem'
            variant='tertiary'
            opacity='0.27'
            top='39%'
            right='58%'
          />
        </InfoSection>
      </FrontSecStatic>
      <FrontScroll />
    </>
  )
}
export default Shop
