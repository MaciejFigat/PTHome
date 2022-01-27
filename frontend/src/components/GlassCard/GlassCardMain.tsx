import React from 'react'
import Meatball from '../Meatballs/Meatball'
import {
  GlassCard,
  ToplineGlass,
  HeadingGlass,
  SubtitleGlass,
  GlassTextWrapper,
} from './GlassCard.styled'
import nina2 from '../../data/assets/nina2.jpg'
import { MeatballContainer } from '../Meatballs/Meatballs.styled'
interface GlassCardMainProps {
  topline?: string
  heading: string
  subtitle: string
  left?: string
  variant?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'blue'
    | 'bluegreen'
    | 'dark'
    | 'light'
    | 'blue'
}

const GlassCardMain: React.FC<GlassCardMainProps> = ({
  topline,
  heading,
  subtitle,
  variant,
  left,
}) => {
  return (
    <GlassCard left={left} variant={variant}>
      <MeatballContainer>
        <Meatball
          height='22rem'
          width='22rem'
          img={nina2}
          version='secondary'
          alt='trainer'
        />
      </MeatballContainer>
      <GlassTextWrapper>
        <ToplineGlass variant={variant}>{topline}</ToplineGlass>
        <HeadingGlass variant={variant}>{heading}</HeadingGlass>
        <SubtitleGlass variant={variant}>{subtitle}</SubtitleGlass>
      </GlassTextWrapper>
    </GlassCard>
  )
}
export default GlassCardMain
