import React from 'react'
import SectionCards from '../components/SectionCards'
import SmallSection from '../components/SmallSection'

const cardDataOne = [
  {
    id: 1,
    title: 'Exercise Card',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic suscipit tenetur nisi distinctio voluptatum iusto quas at, alias molestias voluptatem!',
  },
]
interface ExerciseProps {}

const Exercise: React.FC<ExerciseProps> = () => {
  return (
    <>
      {' '}
      <SmallSection
        title='Here you can contact me'
        description='I like emails'
      />
      <SectionCards cardData={cardDataOne} variant='primary' />
    </>
  )
}
export default Exercise
