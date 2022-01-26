import React from 'react'
import Meatball from '../components/Meatballs/Meatball'
// import SmallSection from '../components/SectionSmall/SmallSection'
import back from '../data/assets/back.png'
import mirror from '../data/assets/mirror.jpg'
interface ShopProps {}

const Shop: React.FC<ShopProps> = () => {
  return (
    <>
      {/* <SmallSection
        title='Shop section'
        description="hey I'm a small section in the shop!"
        variant='light'
      /> */}

      <Meatball
        version='primary'
        img={back}
        alt='back muscles'
        width='15em'
        height='15em'
      />
      <Meatball
        version='secondary'
        img={back}
        alt='back muscles'
        width='5em'
        height='5em'
      />
      <Meatball
        img={mirror}
        version='secondary'
        alt='back muscles'
        width='100px'
        height='100px'
      />
      {/* <Meatball
        version='header'
        img={back}
        alt='back muscles'
        width='11em'
        height='11em'
      /> */}
    </>
  )
}
export default Shop
