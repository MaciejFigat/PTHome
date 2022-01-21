import React from 'react'
import InfoSection from '../components/InfoSection/InfoSection'
import {
  homeData,
  homeDataTwo,
  homeDataThree,
  homeDataFour,
  homeDataFive,
} from '../data/homeData'
import Toast from '../components/Toast/Toast'
import AnimatedBubble from '../components/AnimatedBubble/AnimatedBubble'
import ScrollSection from '../components/ScrollSection/ScrollSection'

const Home: React.FC = () => {
  return (
    <>
      <Toast option='registerUser' />
      <ScrollSection />
      <InfoSection
        data={homeData}
        buttonNavLink='/contact'
        variant='bluegreen'
        imgStart
        paddingTop='small'
      >
        <AnimatedBubble />
      </InfoSection>
      <InfoSection data={homeDataTwo} variant='primary'></InfoSection>
      <InfoSection
        data={homeDataThree}
        variant='secondary'
        imgStart
      ></InfoSection>
      <InfoSection data={homeDataFour} variant='tertiary'></InfoSection>
      <InfoSection variant='secondary' data={homeDataFive}></InfoSection>
      <InfoSection variant='primary' data={homeDataFive}></InfoSection>
    </>
  )
}
export default Home
