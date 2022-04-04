import React, { ReactNode } from 'react'
import {
  SectionColumn,
  ScrollSectionRow,
  ScrollSec,
  SectionColumnScroll,
} from './Scroll2.styled'

interface Scroll2Props {
  wideSection?: ReactNode
  narrowSection?: ReactNode
  widthSmall?: string
  widthBig?: string
  transparent?: boolean
}

const Scroll2: React.FC<Scroll2Props> = ({
  wideSection,
  narrowSection,
  widthSmall,
  widthBig,
  transparent,
}) => {
  return (
    <ScrollSec>
      <ScrollSectionRow>
        <SectionColumn transparent={transparent} width={widthSmall}>
          {narrowSection}
        </SectionColumn>
        <SectionColumnScroll width={widthBig}>
          {wideSection}
        </SectionColumnScroll>
      </ScrollSectionRow>
    </ScrollSec>
  )
}
export default Scroll2
