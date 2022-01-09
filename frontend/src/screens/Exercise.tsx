import React from 'react'
import Cards from '../components/Cards/Cards'

import SmallSection from '../components/SectionSmall/SmallSection'

interface ExerciseProps {}

const Exercise: React.FC<ExerciseProps> = () => {
  return (
    <>
      {' '}
      <SmallSection
        title='Oferuję następujące usługi'
        description='zapraszam serdecznie'
        variant='primary'
      />
      <Cards />
    </>
  )
}
export default Exercise
