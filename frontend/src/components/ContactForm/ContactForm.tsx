import React, { useState, useEffect } from 'react'
import emailjs from 'emailjs-com'
// import Toast from '../Toast/Toast'
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

  const messageResetHandler = (e: any) => {
    e.preventDefault()
    setToastVersion('reset')
    setToastMessage('Formularz zresetowany')
  }

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
  const emailJSSendHandler = (e: any) => {
    e.preventDefault()
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
    // setSpinnerVisible(true)
    if (name.length < 1) {
      setToastVersion('failure')
      // setSpinnerVisible(false)
      setToastMessage('Podaj imię')
    } else if (!regex.test(email)) {
      setToastVersion('failure')
      // setSpinnerVisible(false)
      setToastMessage('Wpisz prawidłowy email')
    } else if (formMessage.length < 3) {
      setToastVersion('failure')
      // setSpinnerVisible(false)
      setToastMessage('Wpisz wiadomość')
    } else {
      // @ts-ignore
      emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, EMAILJS_ID).then(
        function () {
          setToastVersion('success')
          // setSpinnerVisible(false)
          setToastMessage('Wiadomość wysłana!')
        },
        function () {
          setToastVersion('failure')
          // setSpinnerVisible(false)
          setToastMessage('Nie udało się wysłać wiadomości')
        }
      )
    }
  }
  return (
    <>
      <FormContainerDiv>
        <ResponsiveDiv>
          {' '}
          <ContactFormContainer>
            {/* <Loader
              type='ThreeDots'
              color='var(--text-main)'
              height={20}
              width={60}
              visible={spinnerVisible}
            /> */}
            <ContactFormStyled>
              <ContactField>
                <label> Imię</label>
                <ContactFieldContent
                  type='text'
                  value={name}
                  placeholder='Wpisz swoje imię'
                  onChange={(e: any) => setName(e.target.value)}
                />
              </ContactField>
              <ContactField>
                <label> Email:</label>
                <ContactFieldContent
                  type='email'
                  value={email}
                  placeholder='Wpisz email kontaktowy'
                  onChange={(e: any) => setEmail(e.target.value)}
                />
              </ContactField>
              <ContactField>
                <label> Wiadomość:</label>
                <MessageField
                  value={formMessage}
                  placeholder='Wpisz wiadomość'
                  onChange={(e: any) => setFormMessage(e.target.value)}
                ></MessageField>
              </ContactField>
              <SendButtonWrapper>
                <SendButton onClick={emailJSSendHandler}>Wyślij</SendButton>

                <SendButton onClick={messageResetHandler}>reset</SendButton>
              </SendButtonWrapper>
            </ContactFormStyled>{' '}
          </ContactFormContainer>
        </ResponsiveDiv>
      </FormContainerDiv>
    </>
  )
}
export default ContactForm
