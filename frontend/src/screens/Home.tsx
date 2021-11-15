import React from 'react'
import InfoSection from '../components/InfoSection/InfoSection'
import {
  homeData,
  homeDataTwo,
  homeDataThree,
  homeDataFour,
  homeDataFive,
} from '../data/homeData'

const Home: React.FC = () => {
  return (
    <>
      <InfoSection data={homeData} variant='blue' imgStart></InfoSection>
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
