import React from 'react'
import SectionCards from '../components/SectionCards/SectionCards'
import SmallSection from '../components/SectionSmall/SmallSection'

const cardDataOne = [
  {
    id: 1,
    title: 'Contact Card',
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
interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  return (
    <>
      {' '}
      <SmallSection
        title='Here you can contact me'
        description='I like emails'
      />
      <SectionCards cardData={cardDataOne} variant='dark' />
      <SectionCards cardData={cardDataOne} variant='light' />
    </>
  )
}
export default Contact
