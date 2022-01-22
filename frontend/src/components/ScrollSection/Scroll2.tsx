import React, { ReactNode } from 'react'
// import AnimatedBubble from '../AnimatedBubble/AnimatedBubble'
import {
  SectionColumn,
  ScrollSectionRow,
  ScrollSec,
  SectionColumnScroll,
} from './Scroll2.styled'

interface Scroll2Props {
  wideSection?: ReactNode
  narrowSection?: ReactNode
}

const Scroll2: React.FC<Scroll2Props> = ({ wideSection, narrowSection }) => {
  return (
    <ScrollSec>
      <ScrollSectionRow>
        <SectionColumn>{narrowSection}</SectionColumn>
        <SectionColumnScroll>{wideSection}</SectionColumnScroll>
      </ScrollSectionRow>
    </ScrollSec>
  )
}
export default Scroll2
