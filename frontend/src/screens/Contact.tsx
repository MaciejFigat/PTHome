import React from 'react'
import ContactForm from '../components/ContactForm/ContactForm'
import ContactSection from '../components/ContactSection/ContactSection'

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  return (
    <>
      {' '}
      <ContactSection imgStart>
        {' '}
        <ContactForm />
      </ContactSection>
    </>
  )
}
export default Contact
