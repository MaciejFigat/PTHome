import React from 'react'
import InfoSection from '../components/InfoSection/InfoSection'
import {
  homeData,
  homeDataTwo,
  homeDataThree,
  homeDataFour,
  homeDataFive,
} from '../data/homeData'
interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <InfoSection
        variant='blue'
        topline={homeData.topline}
        headline={homeData.headline}
        subtitle={homeData.subtitle}
        buttonLabel={homeData.buttonLabel}
        img={homeData.img}
        imgStart
      ></InfoSection>
      <InfoSection
        variant='primary'
        topline={homeDataTwo.topline}
        headline={homeDataTwo.headline}
        subtitle={homeDataTwo.subtitle}
        buttonLabel={homeDataTwo.buttonLabel}
        img={homeDataTwo.img}
      ></InfoSection>
      <InfoSection
        variant='secondary'
        topline={homeDataThree.topline}
        headline={homeDataThree.headline}
        subtitle={homeDataThree.subtitle}
        buttonLabel={homeDataThree.buttonLabel}
        img={homeDataThree.img}
        imgStart
      ></InfoSection>
      <InfoSection
        variant='tertiary'
        topline={homeDataFour.topline}
        headline={homeDataFour.headline}
        subtitle={homeDataFour.subtitle}
        buttonLabel={homeDataFour.buttonLabel}
        img={homeDataFour.img}
      ></InfoSection>
      <InfoSection
        // variant=''
        topline={homeDataFive.topline}
        headline={homeDataFive.headline}
        subtitle={homeDataFive.subtitle}
        img={homeDataFive.img}
      ></InfoSection>
    </>
  )
}
export default Home
