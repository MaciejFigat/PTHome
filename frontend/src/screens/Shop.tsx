import React from 'react'

import SectionCards from '../components/SectionCards/SectionCards'
import SmallSection from '../components/SectionSmall/SmallSection'

interface ShopProps {}

const Shop: React.FC<ShopProps> = () => {
  return (
    <>
      <SmallSection
        title='Shop section'
        description="hey I'm a small section in the shop!"
        variant='light'
      />
    </>
  )
}
export default Shop
