import React from 'react'

import SmallSection from '../components/SectionSmall/SmallSection'

interface ExerciseProps {}

const Exercise: React.FC<ExerciseProps> = () => {
  return (
    <>
      {' '}
      <SmallSection
        title='Here you can contact me'
        description='I like emails'
        variant='dark'
      />
    </>
  )
}
export default Exercise
