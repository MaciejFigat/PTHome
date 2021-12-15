import React from 'react'

import SmallSection from '../components/SectionSmall/SmallSection'

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  return (
    <>
      {' '}
      <SmallSection
        title='About me'
        description='I like emails'
        variant='primary'
      />
    </>
  )
}
export default Contact
