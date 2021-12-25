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
  data?: InfoData
  imgStart?: boolean
  children?: ReactNode
}

const ContactSection: React.FC<ContactSectionProps> = ({
  data,
  imgStart,
  children,
}) => {
  return (
    <>
      {' '}
      <InfoSec>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <Heading>Lorem ipsum dolor sit.</Heading>
                <TopLine>
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </TopLine>
                <TopLine>
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </TopLine>
                <TopLine>
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </TopLine>
                <Heading>Join me here</Heading>
                <Subtitle>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                  vero omnis harum laborum voluptatum delectus.
                </Subtitle>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              {children ? (
                children
              ) : (
                <ImgWrapper imgStart>
                  {data && <Img src={data.img}></Img>}
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
