import React, { useState, ReactNode, useEffect } from 'react'
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
  CopyHeading,
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
  const [copySuccess, setCopySuccess] = useState('Copied!')

  const copyHandler = (id: string) => {
    const copyText = document.getElementById(id)?.innerText
    if (copyText) {
      const dummy = document.createElement('textarea')
      document.body.appendChild(dummy)
      dummy.value = copyText
      dummy.select()
      document.execCommand('copy')
      document.body.removeChild(dummy)
      setCopySuccess('Copied!')
      console.log(copySuccess)
    }
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      setCopySuccess('')
    }, 3000)
    return () => clearTimeout(timer)
  }, [copySuccess])
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
                <CopyHeading
                  contentAfter={copySuccess}
                  id='copyEmail'
                  onClick={() => copyHandler('copyEmail')}
                >
                  secretEmail@special.com
                </CopyHeading>
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
