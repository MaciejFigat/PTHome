import React from 'react'
import SectionCardsv2 from '../components/SectionCardsv2'
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
      <SectionCardsv2 cardData={cardDataOne} variant='light' />
      <SmallSection
        title='2nd section'
        description="hey I'm a small section!"
      />
      <SectionCardsv2 cardData={cardDataOne} variant='secondary' />
      <SectionCardsv2 cardData={cardDataOne} variant='primary' />
      <SectionCardsv2 cardData={cardDataOne} variant='dark' />
    </>
  )
}
export default Home
