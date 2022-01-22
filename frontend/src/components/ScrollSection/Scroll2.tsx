import React, { ReactNode } from 'react'
import AnimatedBubble from '../AnimatedBubble/AnimatedBubble'
import {
  TextWrapper,
  SectionColumn,
  ScrollSectionRow,
  ScrollSec,
  SectionColumnScroll,
} from './Scroll2.styled'

interface Scroll2Props {
  children?: ReactNode
}

const Scroll2: React.FC<Scroll2Props> = ({ children }) => {
  return (
    <ScrollSec>
      <ScrollSectionRow>
        <SectionColumn>
          <AnimatedBubble />
        </SectionColumn>
        <SectionColumnScroll>{children}</SectionColumnScroll>
      </ScrollSectionRow>
    </ScrollSec>
  )
}
export default Scroll2
