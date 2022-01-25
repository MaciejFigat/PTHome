import React from 'react'
import { MeatballImg } from '../components/Meatballs/Meatballs.styled'

import SmallSection from '../components/SectionSmall/SmallSection'
import back from '../data/assets/back.png'
interface ShopProps {}

const Shop: React.FC<ShopProps> = () => {
  return (
    <>
      <SmallSection
        title='Shop section'
        description="hey I'm a small section in the shop!"
        variant='light'
      />
      <div>
        <MeatballImg src={back} alt='back muscles' />
        <svg width='0' height='0'>
          <defs>
            <clipPath id='metaballOne' clipPathUnits='objectBoundingBox'>
              <path d='M0.691139 0.399038C0.704329 0.365785 0.711579 0.329529 0.711579 0.291579C0.711579 0.130544 0.581035 0 0.42 0C0.258965 0 0.128421 0.130544 0.128421 0.291579C0.128421 0.332647 0.136911 0.371732 0.152232 0.407174C0.187006 0.49448 0.172393 0.532516 0.109391 0.573302C0.0437377 0.613929 0 0.686594 0 0.769474C0 0.89679 0.10321 1 0.230526 1C0.287477 1 0.339605 0.979348 0.379829 0.945125C0.441673 0.893312 0.461696 0.890638 0.527404 0.911288C0.547858 0.9183 0.5698 0.922105 0.592632 0.922105C0.70367 0.922105 0.793684 0.832091 0.793684 0.721053C0.793684 0.659964 0.766439 0.605238 0.723437 0.568364C0.670147 0.522063 0.656848 0.493036 0.691139 0.399038Z' />
            </clipPath>
          </defs>
        </svg>
      </div>
    </>
  )
}
export default Shop
