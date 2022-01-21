import React from 'react'
import AnimatedBubble from '../AnimatedBubble/AnimatedBubble'
import {
  TextWrapper,
  SectionColumn,
  ScrollSectionRow,
  ScrollSec,
  SectionColumnScroll,
} from './ScrollSection.styled'

interface ScrollSectionProps {}

const ScrollSection: React.FC<ScrollSectionProps> = () => {
  return (
    <ScrollSec>
      <ScrollSectionRow>
        <SectionColumn>
          <AnimatedBubble />
        </SectionColumn>
        <SectionColumnScroll>
          <TextWrapper>
            HelloText 2 Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Corporis id culpa perspiciatis mollitia quis necessitatibus at est
            omnis quibusdam deleniti!
          </TextWrapper>
          <TextWrapper>
            HelloText 3Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Corporis id culpa perspiciatis mollitia quis necessitatibus at est
            omnis quibusdam deleniti!
          </TextWrapper>
          <TextWrapper>
            HelloText 4 Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Corporis id culpa perspiciatis mollitia quis necessitatibus at est
            omnis quibusdam deleniti!
          </TextWrapper>
          <TextWrapper>
            HelloText 5 Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Corporis id culpa perspiciatis mollitia quis necessitatibus at est
            omnis quibusdam deleniti!
          </TextWrapper>
        </SectionColumnScroll>
      </ScrollSectionRow>
    </ScrollSec>
  )
}
export default ScrollSection
