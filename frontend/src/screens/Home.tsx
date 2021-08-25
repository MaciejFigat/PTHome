import React from 'react'
import SectionCards from '../components/SectionCards'
import SmallSection from '../components/SmallSection'
interface HomeProps {}

const cardDataOne = [
  {
    id: 1,
    title: '1st title',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, esse?',
  },
  {
    id: 2,
    title: '2nd title',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, esse?',
  },
  {
    id: 3,
    title: '3rd title',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, esse?',
  },
]

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <SmallSection
        title='!st section'
        description="hey I'm a small section!"
      />
      <SectionCards cardData={cardDataOne} variant='light' />
      <SmallSection
        title='2nd section'
        description="hey I'm a small section!"
      />
      <SectionCards cardData={cardDataOne} variant='secondary' />
      <SectionCards cardData={cardDataOne} variant='primary' />
      <SectionCards cardData={cardDataOne} variant='dark' />
    </>
  )
}
export default Home
