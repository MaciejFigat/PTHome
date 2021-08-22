import React from 'react'
import SectionCardsv2 from '../components/SectionCardsv2'
import SmallSection from '../components/SmallSection'

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
  {
    id: 3,
    title: '3rd title',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic suscipit tenetur nisi distinctio voluptatum iusto quas at, alias molestias voluptatem!',
  },
  {
    id: 4,
    title: 'Shop Card',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic suscipit tenetur nisi distinctio voluptatum iusto quas at, alias molestias voluptatem!',
  },
  {
    id: 5,
    title: '2nd title',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic suscipit tenetur nisi distinctio voluptatum iusto quas at, alias molestias voluptatem!',
  },
  {
    id: 6,
    title: '3rd title',
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
      />

      <SectionCardsv2 cardData={cardDataOne} variant='secondary' />
    </>
  )
}
export default Shop
