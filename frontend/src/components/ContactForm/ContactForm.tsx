import React, { useState, useEffect } from 'react'
import Toast from '../Toast/Toast'
import {
  ResponsiveDiv,
  FormContainerDiv,
  ContactFormContainer,
  ContactFormStyled,
  ContactField,
  ContactFieldContent,
  MessageField,
  SendButtonWrapper,
  SendButton,
} from './contactForm.styled.js'
interface ContactFormProps {}

const ContactForm: React.FC<ContactFormProps> = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [formMessage, setFormMessage] = useState('')
  const [toastVersion, setToastVersion] = useState('none')
  const [toastMessage, setToastMessage] = useState('')

  // EmailJS
  const EMAILJS_ID = process.env.MY_EMAILJS_ID
  const SERVICE_ID = process.env.MY_SERVICE_ID
  const TEMPLATE_ID = process.env.MY_TEMPLATE_ID

  const templateParams = {
    from_name: name,
    to_name: 'Maciej',
    message: formMessage,
    reply_to: email,
  }

  return <div></div>
}
export default ContactForm
