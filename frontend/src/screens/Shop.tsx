import React from 'react'

import FrontScroll from '../components/FrontScroll/FrontScroll'
import InfoSection from '../components/InfoSection/InfoSection'

export const dataOne = {
  topline: 'Lorem ipsum dolor sit.',
  headline:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, mollitia?',
  subtitle:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat perspiciatis non deleniti doloremque, iure laudantium quaerat esse odit. Similique nihil voluptate voluptatem sed tempora sunt libero, saepe corrupti laboriosam suscipit.',

  img: 'https://source.unsplash.com/kVi5zMOUTFc',
}
interface ShopProps {}

const Shop: React.FC<ShopProps> = () => {
  return (
    <>
      <InfoSection
        // paddingTop='small'
        data={dataOne}
        variant='transparent'
        imgStart
      ></InfoSection>
      <FrontScroll />
    </>
  )
}
export default Shop
