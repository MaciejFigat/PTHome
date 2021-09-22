import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, Row, Col } from 'react-bootstrap'
import {
  MainContainer,
  WelcomeText,
  InputContainer,
  ButtonContainer,
  LoginWith,
  IconsContainer,
} from '../styles/login'
import FormContainer from '../components/FormContainer'
// import { login } from '../features/users/userActions'

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e: any) => {
    e.preventDefault()
    // dispatch(login(email, password))
  }

  return (
    <FormContainer>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='email'>
          <h1>Log in</h1>
          <Form.Label>Enter your email:</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId='currentPassword'>
          <p>Enter your password:</p>
          <Form.Control
            type='password'
            placeholder='Enter your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <button type='submit'>Login</button>
      </Form>
      <Row className='py-3'>
        <Col>
          New user?{' '}
          <Link
            //   to={redirect ? `/register?redirect=${redirect}` : '/register'}
            to='/'
          >
            Register
          </Link>
        </Col>
      </Row>
    </FormContainer>
  )
}
export default Login

{
  /* <MainContainer>
      <WelcomeText>Welcome</WelcomeText>
      <InputContainer>
        <Input type="text" placeholder="Email" />
        <Input type="password" placeholder="Password" />
      </InputContainer>
      <ButtonContainer>
        <Button content="Sign Up" />
      </ButtonContainer>
      <LoginWith>OR LOGIN WITH</LoginWith>
      <HorizontalRule />
      <IconsContainer>
        <Icon color={FacebookBackground}>
          <FaFacebookF />
        </Icon>
        <Icon color={InstagramBackground}>
          <FaInstagram />
        </Icon>
        <Icon color={TwitterBackground}>
          <FaTwitter />
        </Icon>
      </IconsContainer>
      <ForgotPassword>Forgot Password ?</ForgotPassword>
    </MainContainer> */
}
