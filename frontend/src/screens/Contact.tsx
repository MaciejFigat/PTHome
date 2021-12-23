import React from 'react'
import ContactForm from '../components/ContactForm/ContactForm'
import ContactSection from '../components/ContactSection/ContactSection'
import SmallSection from '../components/SectionSmall/SmallSection'

interface ContactProps {}

const contactData = {
  topline: 'Lorem ipsum dolor sit.',
  headline:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, mollitia?',
  subtitle: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, dolorem. Rerum quod dolores fugit tenetur mollitia voluptatem tempore, maiores est eligendi ipsam eos aliquam nam, laboriosam distinctio perspiciatis. Sit dicta et nihil reiciendis debitis obcaecati minus aut doloremque voluptate officia.`,
  img: '',
  buttonLabel: 'Send a message',
}
const Contact: React.FC<ContactProps> = () => {
  return (
    <>
      {' '}
      <SmallSection
        title='About me'
        description='I like emails'
        variant='primary'
      />
      <ContactSection data={contactData} variant='blue' imgStart>
        {' '}
        <ContactForm />
      </ContactSection>
    </>
  )
}
export default Contact
