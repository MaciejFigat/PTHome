import React from 'react'
import { BubbleOneBlurry } from '../components/AnimatedBubble/AnimatedBubble.styled'
import FadeInAnimationWrapper from '../components/AnimationWrappers/FadeInAnimationWrapper'
import ContactForm from '../components/ContactForm/ContactForm'
import ContactSection from '../components/ContactSection/ContactSection'

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  return (
    <>
      {' '}
      <BubbleOneBlurry
        variant='secondary'
        width='5rem'
        height='5rem'
        // borderColor='red'
        animationFloatDuration='15s'
        animationDuration='185s'
        top='23rem'
        right='10rem'
      />
      <BubbleOneBlurry
        variant='primary'
        width='6rem'
        height='6rem'
        // borderColor='red'
        animationFloatDuration='25s'
        animationDuration='125s'
        top='33rem'
        right='40rem'
      />
      <BubbleOneBlurry
        variant='secondary'
        width='3rem'
        height='3rem'
        animationFloatDuration='40s'
        animationDuration='40s'
        top='18rem'
        right='19rem'
      />
      <BubbleOneBlurry
        variant='tertiary'
        width='8rem'
        height='8rem'
        animationFloatDuration='15s'
        animationDuration='120s'
        // borderColor='red'
        top='3rem'
        right='7rem'
      />
      <ContactSection imgStart>
        {' '}
        <FadeInAnimationWrapper>
          <ContactForm />{' '}
        </FadeInAnimationWrapper>
      </ContactSection>
    </>
  )
}
export default Contact
