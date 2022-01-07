import React from 'react'
import FadeInAnimationWrapper from '../components/AnimationWrappers/FadeInAnimationWrapper'
import ContactForm from '../components/ContactForm/ContactForm'
import ContactSection from '../components/ContactSection/ContactSection'

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  return (
    <>
      {' '}
      <ContactSection imgStart>
        {' '}
        <FadeInAnimationWrapper>
          <ContactForm />
        </FadeInAnimationWrapper>
      </ContactSection>
    </>
  )
}
export default Contact
