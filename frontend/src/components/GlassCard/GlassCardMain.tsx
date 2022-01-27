import React from 'react'
import {
  GlassCard,
  ToplineGlass,
  HeadingGlass,
  SubtitleGlass,
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
      <ToplineGlass variant={variant}>{topline}</ToplineGlass>
      <HeadingGlass variant={variant}>{heading}</HeadingGlass>
      <SubtitleGlass variant={variant}>{subtitle}</SubtitleGlass>
    </GlassCard>
  )
}
export default GlassCardMain
