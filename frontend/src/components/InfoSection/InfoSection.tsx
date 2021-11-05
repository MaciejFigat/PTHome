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
} from './InfoSection.styled'

interface InfoSectionProps {
  topline: string
  headline: string
  subtitle: string
}

const InfoSection: React.FC<InfoSectionProps> = ({
  topline,
  headline,
  subtitle,
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
                  KLAK THE BATAN
                </Button>
              </TextWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  )
}
export default InfoSection
