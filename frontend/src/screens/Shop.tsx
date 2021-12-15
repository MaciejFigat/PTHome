import React from 'react'

import SectionCards from '../components/SectionCards/SectionCards'
import SmallSection from '../components/SectionSmall/SmallSection'

const cardDataOne = [
  {
    id: 1,
    title: 'Shop Card',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic suscipit tenetur nisi distinctio voluptatum iusto quas at, alias molestias voluptatem!',
  },
  {
    id: 2,
    title: '2nd title',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic suscipit tenetur nisi distinctio voluptatum iusto quas at, alias molestias voluptatem!',
  },
]
interface ShopProps {}

const Shop: React.FC<ShopProps> = () => {
  return (
    <>
      <SmallSection
        title='Shop section'
        description="hey I'm a small section in the shop!"
        variant='light'
      />

      <SectionCards cardData={cardDataOne} variant='secondary' />
    </>
  )
}
export default Shop
