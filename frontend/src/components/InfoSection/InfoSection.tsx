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
  ButtonLink,
  ImgWrapper,
  Img,
} from './InfoSection.styled'

interface InfoData {
  topline: string
  headline: string
  subtitle: string
  buttonLabel?: string
  img: any
}

interface InfoSectionProps {
  data: InfoData
  variant?: 'primary' | 'secondary' | 'tertiary' | 'blue'
  imgStart?: boolean
}

const InfoSection: React.FC<InfoSectionProps> = ({
  data,
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
                <TopLine variant={variant}>{data.topline}</TopLine>
                <Heading variant={variant}>{data.headline}</Heading>
                <Subtitle variant={variant}>{data.subtitle}</Subtitle>
                {data.buttonLabel && (
                  <Button large fontLarge variant={variant}>
                    <ButtonLink
                      variant={variant}
                      href='https://www.poetryfoundation.org/play/75764'
                      target='_blank'
                    >
                      {data.buttonLabel}
                    </ButtonLink>
                  </Button>
                )}
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper imgStart>
                <Img src={data.img}></Img>
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  )
}
export default InfoSection
