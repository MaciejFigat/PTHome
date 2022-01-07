import React, { useState, ReactNode, useEffect } from 'react'
import SocialIcons from '../SvgIcon/SocialIcons'
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
import DropAnimationWrapper from '../AnimationWrappers/DropAnimationWrapper'
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
  const [copySuccess, setCopySuccess] = useState('')

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
  const hoverHelper = () => {
    setCopySuccess('Copy to clipboard?')
  }
  const leaveHelper = () => {
    setCopySuccess('')
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
                <DropAnimationWrapper direction='top'>
                  <Heading>Lorem ipsum dolor sit.</Heading>{' '}
                </DropAnimationWrapper>
                <DropAnimationWrapper>
                  {' '}
                  <TopLine>
                    11 Lorem ipsum dolor sit amet consectetur adipisicing.
                  </TopLine>
                </DropAnimationWrapper>
                <DropAnimationWrapper delay={1}>
                  {' '}
                  <TopLine>
                    22 Lorem ipsum dolor sit amet consectetur adipisicing.
                  </TopLine>
                </DropAnimationWrapper>{' '}
                <DropAnimationWrapper delay={2}>
                  {' '}
                  <TopLine>
                    33 Lorem ipsum dolor sit amet consectetur adipisicing.
                  </TopLine>
                </DropAnimationWrapper>
                <DropAnimationWrapper delay={3}>
                  {' '}
                  <TopLine>
                    44 Lorem ipsum dolor sit amet consectetur adipisicing.
                  </TopLine>
                </DropAnimationWrapper>
                <DropAnimationWrapper direction='left'>
                  <CopyHeading
                    contentAfter={copySuccess}
                    id='copyEmail'
                    onClick={() => copyHandler('copyEmail')}
                    onMouseEnter={() => hoverHelper()}
                    onMouseLeave={() => leaveHelper()}
                  >
                    secretEmail@special.com
                  </CopyHeading>{' '}
                </DropAnimationWrapper>
                <SocialIcons />
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
