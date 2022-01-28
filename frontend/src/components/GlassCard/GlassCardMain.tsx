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
  paddingTop?: string
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
  paddingTop,
}) => {
  return (
    <GlassCard left={left} variant={variant} paddingTop={paddingTop}>
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
