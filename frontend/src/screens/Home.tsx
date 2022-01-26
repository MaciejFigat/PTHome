import React from 'react'
import InfoSection from '../components/InfoSection/InfoSection'
import {
  homeData,
  // homeDataTwo,
  // homeDataThree,
  // homeDataFour,
  // homeDataFive,
} from '../data/homeData'
import Toast from '../components/Toast/Toast'
// import AnimatedBubble from '../components/AnimatedBubble/AnimatedBubble'
// import ScrollSection from '../components/ScrollSection/ScrollSection'
import FrontSection from '../components/FrontSection/FrontSection'
import FrontScroll from '../components/FrontScroll/FrontScroll'
import Meatball from '../components/Meatballs/Meatball'
import mirror from '../data/assets/mirror.jpg'
import { MeatballContainer } from '../components/Meatballs/Meatballs.styled'
const Home: React.FC = () => {
  return (
    <>
      <Toast option='registerUser' />
      <FrontSection />
      <FrontScroll />
      <InfoSection
        data={homeData}
        buttonNavLink='/contact'
        variant='bluegreen'
        imgStart
        paddingTop='small'
      >
        {/* <AnimatedBubble /> */}
        <MeatballContainer>
          <Meatball
            img={mirror}
            alt='mirror muscles'
            width='15rem'
            height='15rem'
          />
        </MeatballContainer>
      </InfoSection>

      {/* <ScrollSection>
        <InfoSection data={homeDataTwo} variant='primary'></InfoSection>
        <InfoSection
          data={homeDataThree}
          variant='secondary'
          imgStart
        ></InfoSection>
        <InfoSection data={homeDataFour} variant='tertiary'></InfoSection>
        <InfoSection variant='secondary' data={homeDataFive}></InfoSection>
        <InfoSection variant='primary' data={homeDataFive}></InfoSection>
      </ScrollSection> */}
    </>
  )
}
export default Home
