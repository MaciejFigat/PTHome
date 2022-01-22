import React, { ReactNode } from 'react'
import { Img } from '../InfoSection/InfoSection.styled'
import NinaFrown from '../../data/assets/NinaFrown.png'
import mirror from '../../data/assets/mirror.jpg'
import nina1 from '../../data/assets/nina1.jpg'
import nina2 from '../../data/assets/nina2.jpg'
import {
  TextWrapper,
  SectionColumn,
  ScrollSectionRow,
  ScrollSec,
  SectionColumnScroll,
} from './ScrollSection.styled'

interface ScrollSectionProps {
  children?: ReactNode
}

const ScrollSection: React.FC<ScrollSectionProps> = ({ children }) => {
  return (
    <ScrollSec>
      <ScrollSectionRow imgStart>
        <SectionColumn>{children}</SectionColumn>
        <SectionColumnScroll>
          <TextWrapper>
            HelloText 2 Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Corporis id culpa perspiciatis mollitia quis necessitatibus at est
            omnis quibusdam deleniti!
          </TextWrapper>

          <Img src={nina1} />

          <TextWrapper>
            HelloText 3Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Corporis id culpa perspiciatis mollitia quis necessitatibus at est
            omnis quibusdam deleniti!
          </TextWrapper>
          <Img src={NinaFrown} />
          <TextWrapper>
            HelloText 4 Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Corporis id culpa perspiciatis mollitia quis necessitatibus at est
            omnis quibusdam deleniti!
          </TextWrapper>
          <Img src={mirror} />
          <TextWrapper>
            HelloText 5 Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Corporis id culpa perspiciatis mollitia quis necessitatibus at est
            omnis quibusdam deleniti!
          </TextWrapper>
          <Img src={nina2} />
          <TextWrapper>
            HelloText 2 Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Corporis id culpa perspiciatis mollitia quis necessitatibus at est
            omnis quibusdam deleniti!
          </TextWrapper>
        </SectionColumnScroll>
      </ScrollSectionRow>
    </ScrollSec>
  )
}
export default ScrollSection
