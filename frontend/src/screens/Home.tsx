import React from 'react'
import SectionCards from '../components/SectionCards'
interface HomeProps {}

const cardDataOne = [
  { id: 1, title: '1st title', description: 'dddsdsd' },
  { id: 2, title: '2nd title', description: 'dddsdsd' },
  { id: 3, title: '3rd title', description: 'dddsdsd' },
]

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <SectionCards cardData={cardDataOne} />
    </>
  )
}
export default Home
