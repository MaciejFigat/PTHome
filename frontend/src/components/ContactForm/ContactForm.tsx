import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import Toast from '../../components/Toast/Toast'
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
  const [toastOption, setToastOption] = useState<
    'noneEmail' | 'sentEmail' | 'errorEmail' | 'warningEmail'
  >('noneEmail')
  const [toastMessage, setToastMessage] = useState('')

  const messageResetHandler = (e: any) => {
    e.preventDefault()
    setToastOption('warningEmail')
    setToastMessage('Reset')
  }

  // EmailJS
  const EMAILJS_ID = process.env.REACT_APP_MY_EMAILJS_ID
  const SERVICE_ID = process.env.REACT_APP_MY_SERVICE_ID
  const TEMPLATE_ID = process.env.REACT_APP_MY_TEMPLATE_ID

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
      setToastOption('warningEmail')
      // setSpinnerVisible(false)
      setToastMessage('Podaj imię')
    } else if (!regex.test(email)) {
      setToastOption('warningEmail')
      // setSpinnerVisible(false)
      setToastMessage('Wpisz prawidłowy email')
    } else if (formMessage.length < 3) {
      setToastOption('warningEmail')
      // setSpinnerVisible(false)
      setToastMessage('Wpisz wiadomość')
    } else {
      if (SERVICE_ID && TEMPLATE_ID && EMAILJS_ID) {
        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, EMAILJS_ID).then(
          function () {
            setToastOption('sentEmail')
            // setSpinnerVisible(false)
            setToastMessage('Wiadomość wysłana')
          },
          function () {
            setToastOption('errorEmail')
            // setSpinnerVisible(false)
            setToastMessage('Error')
          }
        )
      }
    }
  }
  return (
    <>
      <FormContainerDiv>
        <Toast option={toastOption} emailMessage={toastMessage} />
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
