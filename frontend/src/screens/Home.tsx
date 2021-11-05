import React from 'react'
import InfoSection from '../components/InfoSection/InfoSection'
import { homeData } from '../data/homeData'
interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <InfoSection
        topline={homeData.topline}
        headline={homeData.headline}
        subtitle={homeData.subtitle}
        img={homeData.img}
      ></InfoSection>
    </>
  )
}
export default Home
