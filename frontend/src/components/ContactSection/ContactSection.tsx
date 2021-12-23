import React, { ReactNode } from 'react'
import {
  InfoSec,
  Container,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
} from './ContactSection.styled'

interface InfoData {
  topline: string
  headline: string
  subtitle: string
  buttonLabel?: string
  img: any
}

interface ContactSectionProps {
  data: InfoData
  variant?: 'primary' | 'secondary' | 'tertiary' | 'blue'
  imgStart?: boolean
  children?: ReactNode
  buttonLink?: string
}

const ContactSection: React.FC<ContactSectionProps> = ({
  data,
  variant,
  imgStart,
  children,
}) => {
  return (
    <>
      {' '}
      <InfoSec variant={variant}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine variant={variant}>{data.topline}</TopLine>
                <Heading variant={variant}>{data.headline}</Heading>
                <Subtitle variant={variant}>{data.subtitle}</Subtitle>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              {children ? (
                children
              ) : (
                <ImgWrapper imgStart>
                  <Img src={data.img}></Img>
                </ImgWrapper>
              )}
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  )
}
export default ContactSection
