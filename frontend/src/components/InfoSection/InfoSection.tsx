import React from 'react'
import {
  InfoSec,
  Container,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  Button,
  ImgWrapper,
  Img,
} from './InfoSection.styled'

interface InfoSectionProps {
  topline: string
  headline: string
  subtitle: string
  buttonLabel?: string
  img: any
  variant?: 'primary' | 'secondary' | 'tertiary' | 'blue' | string
  imgStart?: boolean
}

const InfoSection: React.FC<InfoSectionProps> = ({
  topline,
  headline,
  subtitle,
  buttonLabel,
  img,
  variant,
  imgStart,
}) => {
  return (
    <>
      <InfoSec variant={variant}>
        <Container>
          {/* <InfoRow imgStart={imgStart}> */}

          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine variant={variant}>{topline}</TopLine>
                <Heading variant={variant}>{headline}</Heading>
                <Subtitle variant={variant}>{subtitle}</Subtitle>
                {buttonLabel && (
                  <Button large fontLarge variant={variant}>
                    {buttonLabel}
                  </Button>
                )}
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start>
                <Img src={img}></Img>
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  )
}
export default InfoSection
