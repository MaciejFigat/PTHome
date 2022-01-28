import React, { ReactNode } from 'react'
import {
  GlassCard,
  ToplineGlass,
  HeadingGlass,
  SubtitleGlass,
  GlassTextWrapper,
} from './GlassCard.styled'

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
    | 'superDark'
  children?: ReactNode
}

const GlassCardMain: React.FC<GlassCardMainProps> = ({
  topline,
  heading,
  subtitle,
  variant,
  left,
  children,
}) => {
  return (
    <GlassCard left={left} variant={variant}>
      {children}
      <GlassTextWrapper>
        <ToplineGlass variant={variant}>{topline}</ToplineGlass>
        <HeadingGlass variant={variant}>{heading}</HeadingGlass>
        <SubtitleGlass variant={variant}>{subtitle}</SubtitleGlass>
      </GlassTextWrapper>
    </GlassCard>
  )
}
export default GlassCardMain
