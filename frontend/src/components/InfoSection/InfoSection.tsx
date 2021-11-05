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
  img: any
}

const InfoSection: React.FC<InfoSectionProps> = ({
  topline,
  headline,
  subtitle,
  img,
}) => {
  return (
    <>
      <InfoSec>
        <Container>
          {/* <InfoRow imgStart={imgStart}> */}

          <InfoRow imgStart>
            <InfoColumn>
              <TextWrapper>
                <TopLine light>{topline}</TopLine>
                <Heading light>{headline}</Heading>
                <Subtitle light>{subtitle}</Subtitle>
                <Button large fontLarge primary>
                  Klak it!
                </Button>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper>
                <Img src={img} start></Img>
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  )
}
export default InfoSection
