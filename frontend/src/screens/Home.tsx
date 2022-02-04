import React from 'react'
import InfoSection from '../components/InfoSection/InfoSection'
import {
  homeDataTwo,
  homeDataThree,
  homeDataFour,
  homeDataFive,
} from '../data/homeData'
import Toast from '../components/Toast/Toast'

import FrontSectionStatic from '../components/FrontSection/FrontSectionStatic'
import FrontSection from '../components/FrontSection/FrontSection'

const Home: React.FC = () => {
  return (
    <>
      <Toast option='registerUser' />
      <FrontSectionStatic />
      <FrontSection />
      <InfoSection
        paddingTop='small'
        data={homeDataTwo}
        variant='transparent'
        imgStart
      ></InfoSection>
      <InfoSection
        paddingTop='small'
        data={homeDataThree}
        variant='bluegreen'
      ></InfoSection>
      <InfoSection
        paddingTop='small'
        data={homeDataFour}
        variant='tertiary'
      ></InfoSection>
      <InfoSection
        paddingTop='small'
        variant='secondary'
        data={homeDataFive}
      ></InfoSection>
      <InfoSection
        paddingTop='small'
        variant='primary'
        data={homeDataFive}
      ></InfoSection>
    </>
  )
}
export default Home
