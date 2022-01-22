import React, { ReactNode } from 'react'
// import AnimatedBubble from '../AnimatedBubble/AnimatedBubble'
import {
  SectionColumn,
  TextWrapper,
  ScrollSectionRow,
  ScrollSec,
  SectionColumnScroll,
} from './Scroll2.styled'
import { Img } from '../InfoSection/InfoSection.styled'
import NinaFrown from '../../data/assets/NinaFrown.png'
import mirror from '../../data/assets/mirror.jpg'
import nina1 from '../../data/assets/nina1.jpg'
import nina2 from '../../data/assets/nina2.jpg'
interface Scroll2Props {
  children?: ReactNode
}

const Scroll2: React.FC<Scroll2Props> = ({ children }) => {
  return (
    <ScrollSec>
      <ScrollSectionRow>
        <SectionColumn>
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

          <Img src={nina2} />
        </SectionColumn>
        <SectionColumnScroll>{children}</SectionColumnScroll>
      </ScrollSectionRow>
    </ScrollSec>
  )
}
export default Scroll2
